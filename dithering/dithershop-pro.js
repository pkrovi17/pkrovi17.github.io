(() => {
  "use strict";

  const state = {
    layers: [],
    activeId: null,
    nextId: 1
  };

  const els = {};
  let processIdleTimer = null;

  function logProcess(message) {
    const output = document.querySelector("#ds-console-output");
    if (!output) return;

    const line = document.createElement("div");
    line.className = "ds-console-line";

    const time = new Date().toLocaleTimeString();
    line.textContent = `[${time}] ${message}`;

    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
  }

  window.dithershopLogProcess = logProcess;

  function setProcessBusy(isBusy, label) {
    const light = document.querySelector("#ds-process-light");
    if (!light) return;

    light.textContent = label || (isBusy ? "RUNNING" : "IDLE");
    light.classList.toggle("busy", isBusy);
    light.setAttribute("aria-busy", isBusy ? "true" : "false");
  }

  function pulseProcess(label = "RUNNING", duration = 500) {
    if (processIdleTimer) {
      clearTimeout(processIdleTimer);
    }

    setProcessBusy(true, label);
    processIdleTimer = setTimeout(() => {
      processIdleTimer = null;
      setProcessBusy(false, "IDLE");
    }, duration);
  }

  async function withProcess(label, task) {
    setProcessBusy(true, "RUNNING");
    logProcess(label);

    try {
      const result = await task();
      logProcess("DONE");
      return result;
    } catch (error) {
      logProcess("ERROR: " + error.message);
      throw error;
    } finally {
      setProcessBusy(false, "IDLE");
    }
  }

  function $(selector) {
    return document.querySelector(selector);
  }

  function boot() {
    els.input = $("#ds-layer-input");
    els.add = $("#ds-add-layer");
    els.list = $("#ds-layer-list");
    els.count = $("#ds-layer-count");
    els.opacity = $("#ds-opacity");
    els.blend = $("#ds-blend");
    els.send = $("#ds-send-layer");
    els.exportFlat = $("#ds-export-flat");
    els.refreshPreview = $("#ds-refresh-preview");

    bind();
    bindEffectMonitor();
    createBaseLayer();
    observeAppName();
    setInterval(renameApp, 700);

    logProcess("DITHERSHOP PROCESS MONITOR ONLINE");
    logProcess("READY");
  }

  function bind() {
    els.add.addEventListener("click", () => els.input.click());

    els.input.addEventListener("change", async event => {
      const files = Array.from(event.target.files || []);

      for (const file of files) {
        await addImageLayer(file);
      }

      event.target.value = "";
    });

    els.opacity.addEventListener("input", () => {
      const layer = activeLayer();
      if (!layer) return;

      layer.opacity = Number(els.opacity.value) / 100;
      renderLayers();
      pulseProcess("UPDATING", 450);
      logProcess(`OPACITY SET: ${Math.round(layer.opacity * 100)}%`);
    });

    els.blend.addEventListener("change", () => {
      const layer = activeLayer();
      if (!layer) return;

      layer.blend = els.blend.value;
      renderLayers();
      pulseProcess("UPDATING", 450);
      logProcess(`BLEND MODE SET: ${labelBlend(layer.blend).toUpperCase()}`);
    });

    els.send.addEventListener("click", sendActiveLayerToMainEditor);
    els.exportFlat.addEventListener("click", exportFlattenedPNG);
    els.refreshPreview.addEventListener("click", refreshPreview);
    window.addEventListener("dithershop:process-busy", event => {
      pulseProcess(event.detail?.label || "RUNNING", event.detail?.duration || 500);
    });
    window.addEventListener("dithershop:process-idle", () => {
      if (processIdleTimer) {
        clearTimeout(processIdleTimer);
        processIdleTimer = null;
      }
      setProcessBusy(false, "IDLE");
    });
  }

  function refreshPreview() {
    pulseProcess("UPDATING", 700);
    window.dispatchEvent(new CustomEvent("dithershop:refresh-preview"));
    logProcess("MANUAL UPDATE REQUESTED: REFRESHING CURRENT IMAGE");
  }

  function bindEffectMonitor() {
    const seenValues = new WeakMap();
    const ignoredSelectors = "#ds-layer-panel, #ds-topbar, #ds-console";

    document.addEventListener("pointerdown", event => {
      const source = event.target instanceof Element ? event.target : null;
      const target = source?.closest("button, [role='button'], [aria-pressed]");
      if (!target || target.closest(ignoredSelectors) || !target.closest("#root")) return;

      const label = readableControlLabel(target);
      if (!label) return;

      pulseProcess("UPDATING", 650);
      logProcess(`EFFECT UI CLICK: ${label}`);
    }, true);

    document.addEventListener("focusin", event => {
      const target = event.target;
      if (!isLoggableField(target) || target.closest(ignoredSelectors) || !target.closest("#root")) return;
      seenValues.set(target, readControlValue(target));
    }, true);

    document.addEventListener("input", event => {
      const target = event.target;
      if (!isLoggableField(target) || target.closest(ignoredSelectors) || !target.closest("#root")) return;

      const label = readableControlLabel(target);
      const previous = seenValues.get(target);
      const current = readControlValue(target);

      if (previous === current) return;
      seenValues.set(target, current);

      pulseProcess("UPDATING", 650);
      logProcess(`EFFECT CONTROL: ${label || target.type || target.tagName.toLowerCase()} ${formatValue(previous)} -> ${formatValue(current)}`);
    }, true);

    document.addEventListener("change", event => {
      const target = event.target;
      if (!isLoggableField(target) || target.closest(ignoredSelectors) || !target.closest("#root")) return;

      const label = readableControlLabel(target);
      const current = readControlValue(target);

      seenValues.set(target, current);
      pulseProcess("UPDATING", 650);
      logProcess(`EFFECT CHANGE COMMITTED: ${label || target.tagName.toLowerCase()} = ${formatValue(current)}`);
    }, true);
  }

  function isLoggableField(target) {
    return target instanceof HTMLInputElement ||
      target instanceof HTMLSelectElement ||
      target instanceof HTMLTextAreaElement;
  }

  function readControlValue(target) {
    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      return target.checked ? "on" : "off";
    }

    return target.value;
  }

  function readableControlLabel(target) {
    const aria = target.getAttribute("aria-label");
    const title = target.getAttribute("title");
    const text = target.textContent?.trim();
    const idLabel = target.id ? document.querySelector(`label[for="${CSS.escape(target.id)}"]`)?.textContent?.trim() : "";
    const parentLabel = target.closest("label")?.textContent?.trim();
    const nearby = target.parentElement?.textContent?.trim();

    return cleanLabel(aria || title || idLabel || parentLabel || text || nearby || "");
  }

  function cleanLabel(value) {
    return String(value)
      .replace(/\s+/g, " ")
      .replace(/\b\d+(\.\d+)?%?\b/g, "")
      .trim()
      .slice(0, 96);
  }

  function formatValue(value) {
    if (value === undefined || value === null || value === "") return "(blank)";
    return String(value).slice(0, 48);
  }

  function createBaseLayer() {
    const layer = {
      id: state.nextId++,
      name: "Background",
      opacity: 1,
      blend: "source-over",
      visible: true,
      image: null,
      width: 0,
      height: 0,
      file: null
    };

    state.layers.push(layer);
    state.activeId = layer.id;
    renderLayers();
  }

  async function addImageLayer(file) {
    await withProcess(`IMPORTING LAYER: ${file.name}`, async () => {
      const image = await loadImage(file);

      const layer = {
        id: state.nextId++,
        name: file.name || `Layer ${state.nextId}`,
        opacity: 1,
        blend: "source-over",
        visible: true,
        image,
        width: image.naturalWidth || image.width,
        height: image.naturalHeight || image.height,
        file
      };

      state.layers.unshift(layer);
      state.activeId = layer.id;
      renderLayers();

      logProcess(`LAYER READY: ${layer.width}x${layer.height}`);

      if (state.layers.filter(l => l.image).length === 1) {
        sendLayerFileToMainEditor(layer);
      }
    });
  }

  function loadImage(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const image = new Image();

      image.onload = () => {
        URL.revokeObjectURL(url);
        resolve(image);
      };

      image.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("Could not load image layer."));
      };

      image.src = url;
    });
  }

  function activeLayer() {
    return state.layers.find(layer => layer.id === state.activeId) || null;
  }

  function setActive(id) {
    state.activeId = id;
    const layer = activeLayer();

    if (layer) {
      els.opacity.value = Math.round(layer.opacity * 100);
      els.blend.value = layer.blend;
      logProcess(`ACTIVE LAYER: ${layer.name}`);
    }

    renderLayers();
  }

  function moveLayer(id, direction) {
    const index = state.layers.findIndex(layer => layer.id === id);
    if (index < 0) return;

    const target = index + direction;
    if (target < 0 || target >= state.layers.length) return;

    const temp = state.layers[index];
    state.layers[index] = state.layers[target];
    state.layers[target] = temp;

    renderLayers();
    logProcess("LAYER ORDER UPDATED");
  }

  function removeLayer(id) {
    if (state.layers.length <= 1) {
      logProcess("DELETE BLOCKED: AT LEAST ONE LAYER REQUIRED");
      return;
    }

    const index = state.layers.findIndex(layer => layer.id === id);
    if (index < 0) return;

    const removed = state.layers[index];
    state.layers.splice(index, 1);

    if (state.activeId === id) {
      state.activeId = state.layers[0]?.id || null;
    }

    renderLayers();
    logProcess(`LAYER REMOVED: ${removed.name}`);
  }

  function toggleLayer(id) {
    const layer = state.layers.find(item => item.id === id);
    if (!layer) return;

    layer.visible = !layer.visible;
    renderLayers();
    logProcess(`${layer.visible ? "SHOWING" : "HIDING"} LAYER: ${layer.name}`);
  }

  function renderLayers() {
    els.list.innerHTML = "";

    state.layers.forEach(layer => {
      const row = document.createElement("div");
      row.className = "ds-layer" + (layer.id === state.activeId ? " active" : "");
      row.addEventListener("click", () => setActive(layer.id));

      const thumb = document.createElement("canvas");
      thumb.width = 92;
      thumb.height = 76;
      drawThumb(thumb, layer);

      const title = document.createElement("div");
      title.className = "ds-layer-title";
      title.innerHTML = `
        <strong>${escapeHTML(layer.name)}</strong>
        <small>${layer.visible ? "visible" : "hidden"} · ${Math.round(layer.opacity * 100)}% · ${labelBlend(layer.blend)}</small>
      `;

      const buttons = document.createElement("div");
      buttons.className = "ds-layer-buttons";

      const vis = makeButton(layer.visible ? "◉" : "○", "Toggle visibility", event => {
        event.stopPropagation();
        toggleLayer(layer.id);
      });

      const up = makeButton("↑", "Move up", event => {
        event.stopPropagation();
        moveLayer(layer.id, -1);
      });

      const down = makeButton("↓", "Move down", event => {
        event.stopPropagation();
        moveLayer(layer.id, 1);
      });

      const del = makeButton("×", "Delete", event => {
        event.stopPropagation();
        removeLayer(layer.id);
      });

      buttons.append(vis, up, down, del);

      row.append(thumb, title, buttons);
      els.list.appendChild(row);

      if (layer.id === state.activeId) {
        els.opacity.value = Math.round(layer.opacity * 100);
        els.blend.value = layer.blend;
      }
    });

    const realLayerCount = state.layers.filter(layer => layer.image).length || 1;
    els.count.textContent = `${realLayerCount} layer${realLayerCount === 1 ? "" : "s"}`;
  }

  function drawThumb(canvas, layer) {
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#050400";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "rgba(255,196,0,0.28)";
    ctx.strokeRect(0.5, 0.5, canvas.width - 1, canvas.height - 1);

    if (!layer.image) {
      ctx.fillStyle = "#ffc400";
      ctx.font = "10px monospace";
      ctx.fillText("BASE", 29, 41);
      return;
    }

    const fit = contain(layer.width, layer.height, canvas.width, canvas.height);
    ctx.globalAlpha = layer.opacity;
    ctx.drawImage(layer.image, fit.x, fit.y, fit.w, fit.h);
    ctx.globalAlpha = 1;
  }

  function contain(srcW, srcH, dstW, dstH) {
    const scale = Math.min(dstW / srcW, dstH / srcH);
    const w = srcW * scale;
    const h = srcH * scale;

    return {
      w,
      h,
      x: (dstW - w) / 2,
      y: (dstH - h) / 2
    };
  }

  function makeButton(text, title, handler) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = text;
    button.title = title;
    button.addEventListener("click", handler);
    return button;
  }

  function sendActiveLayerToMainEditor() {
    const layer = activeLayer();

    if (!layer || !layer.file) {
      alert("Select an imported image layer first.");
      logProcess("NO ACTIVE IMAGE LAYER");
      return;
    }

    withProcess(`SENDING TO DITHERSHOP ENGINE: ${layer.name}`, async () => {
      sendLayerFileToMainEditor(layer);
    });
  }

  function sendLayerFileToMainEditor(layer) {
    const originalUpload = document.querySelector("#file-upload");

    if (!originalUpload) {
      alert("Main Dithershop editor upload control is not ready yet.");
      logProcess("UPLOAD CONTROL NOT READY");
      return;
    }

    const transfer = new DataTransfer();
    transfer.items.add(layer.file);

    originalUpload.files = transfer.files;
    originalUpload.dispatchEvent(new Event("change", { bubbles: true }));

    logProcess(`ENGINE RECEIVED: ${layer.name}`);
  }

  function exportFlattenedPNG() {
    withProcess("FLATTENING LAYER STACK", async () => {
      const imageLayers = state.layers.filter(layer => layer.image && layer.visible);

      if (!imageLayers.length) {
        alert("Import at least one visible image layer first.");
        logProcess("EXPORT ABORTED: NO VISIBLE IMAGE LAYERS");
        return;
      }

      const bounds = imageLayers.reduce(
        (acc, layer) => ({
          width: Math.max(acc.width, layer.width),
          height: Math.max(acc.height, layer.height)
        }),
        { width: 1, height: 1 }
      );

      const canvas = document.createElement("canvas");
      canvas.width = bounds.width;
      canvas.height = bounds.height;

      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#050400";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      [...state.layers].reverse().forEach(layer => {
        if (!layer.image || !layer.visible) return;

        const fit = contain(layer.width, layer.height, canvas.width, canvas.height);
        ctx.globalAlpha = layer.opacity;
        ctx.globalCompositeOperation = layer.blend;
        ctx.drawImage(layer.image, fit.x, fit.y, fit.w, fit.h);
      });

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");

      link.href = url;
      link.download = "dithershop-flattened.png";
      link.click();

      logProcess(`EXPORTED PNG: ${canvas.width}x${canvas.height}`);
    });
  }

  function labelBlend(value) {
    return value
      .replace("source-over", "normal")
      .replace("-", " ");
  }

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renameApp() {
    document.title = "Dithershop";

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode(node) {
          if (!node.nodeValue || !node.nodeValue.includes("Grainrad")) {
            return NodeFilter.FILTER_REJECT;
          }

          if (node.parentElement && node.parentElement.closest("script, style")) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const nodes = [];

    while (walker.nextNode()) {
      nodes.push(walker.currentNode);
    }

    nodes.forEach(node => {
      node.nodeValue = node.nodeValue.replaceAll("Grainrad", "Dithershop");
    });
  }

  function observeAppName() {
    const observer = new MutationObserver(renameApp);
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
