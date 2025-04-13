const output = document.getElementById("output");
const commandInput = document.getElementById("commandInput");
const statusBar = document.getElementById("statusBar");
const cursor = document.getElementById("blockCursor");
const beepSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_64e2c7fbfd.mp3?filename=beep-5-96243.mp3");

let isOutputting = false;
let startTime = Date.now();
let commandHistory = [];
let historyIndex = -1;

function formatTime(date) {
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
}

function getUptime() {
  const seconds = Math.floor((Date.now() - startTime) / 1000);
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}m ${secs}s`;
}

function getPlatformInfo() {
  const ua = navigator.userAgent;
  if (ua.includes("Chrome")) return "Google Chrome";
  if (ua.includes("Firefox")) return "Mozilla Firefox";
  if (ua.includes("Safari") && !ua.includes("Chrome")) return "Safari";
  if (ua.includes("Edg")) return "Microsoft Edge";
  if (ua.includes("OPR")) return "Opera";
  return "Unknown Browser";
}

function getRandomIP() {
  return '<span class="censor-block">BLOCKED</span>';
}

function updateStatusBar() {
  const now = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  statusBar.innerText =
    `🕒 ${formatTime(now)} | ⏱ Uptime: ${getUptime()} | 🌍 TZ: ${timezone} | 💻 ${getPlatformInfo()}`;
}

function getSystemInfo() {
  const now = new Date();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return `🖥️ System Info
------------------------------
Time: ${formatTime(now)}
Uptime: ${getUptime()}
Browser: ${getPlatformInfo()}
IP Address: ${getRandomIP()}
Timezone: ${timezone}`;
}

function getNeoFetch() {
  return `

  ██████╗ ██╗  ██╗██████╗  ██████╗ ██╗   ██╗██╗ ██╗███████╗
  ██╔══██╗██║ ██╔╝██╔══██╗██╔═══██╗██║   ██║██║███║╚════██║
  ██████╔╝█████╔╝ ██████╔╝██║   ██║██║   ██║██║╚██║    ██╔╝
  ██╔═══╝ ██╔═██╗ ██╔══██╗██║   ██║╚██╗ ██╔╝██║ ██║   ██╔╝ 
  ██║     ██║  ██╗██║  ██║╚██████╔╝ ╚████╔╝ ██║ ██║   ██║  
  ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝   ╚═══╝  ╚═╝ ╚═╝   ╚═╝  

user       : you  
browser    : ${getPlatformInfo()}
uptime     : ${getUptime()}
timezone   : ${Intl.DateTimeFormat().resolvedOptions().timeZone}
ip addr    : ${getRandomIP()}
for help   : type help`;
}

function handleCommand(cmd) {
  const lowerCmd = cmd.trim().toLowerCase();

  if (lowerCmd.startsWith('echo ')) {
    return cmd.slice(5);
  }

  switch (lowerCmd) {
    case 'help':
      return `Available commands:
- help ............ show this list
- about ........... about me
- projects ........ placeholder
- contact ......... email + github + phone + linkedin
- sysinfo ......... system diagnostics
- uptime .......... how long running
- neofetch ........ display ASCII banner
- echo ............ repeat what you say
- clear ........... clear the terminal`;
    case 'about':
      return "I'm a freshman computer engineering student from UW - Madison.\nI build cool things with code, circuits, and caffeine.";
    case 'projects':
      return "Soon this will list my actual projects with links. Stay tuned!";
    case 'contact':
      return`Email: pkrovi1@gmail.com\nGithub: github.com/pkrovi17\nPhone: +1 (916) 693 - 8802\nLinkedIn: https://www.linkedin.com/in/pranav-krovi/`;
    case 'uptime':
      return `⏱ Uptime: ${getUptime()}`;
    case 'sysinfo':
      return getSystemInfo();
    case 'neofetch':
      return getNeoFetch();
    case 'clear':
      output.innerHTML = '';
      return '';
    case 'echo':
      return 'Usage: echo [your text]';
    default:
      return `Command not found: ${cmd}`;
  }
}

commandInput.addEventListener("keydown", function (e) {
  if (isOutputting) {
    e.preventDefault();
    beepSound.currentTime = 0;
    beepSound.play();
    const wrapper = document.querySelector(".input-wrapper");
    wrapper.classList.add("shake");
    setTimeout(() => wrapper.classList.remove("shake"), 200);
    return;
  }

  if (e.key === "Enter") {
    const cmd = commandInput.value;
    if (cmd.trim() !== '') {
      commandHistory.push(cmd);
      historyIndex = commandHistory.length;
      output.innerHTML += `\n> ${cmd}`;
      const response = handleCommand(cmd);
      if (response) {
        typeWriter(`\n${response}`, () => {}, 30);
        //output.innerHTML += `\n${response}`;
        //output.scrollTop = output.scrollHeight; // 🟢 scroll to bottom after output
      }
      
    }
    commandInput.value = '';
    updateCursorPosition();
    //output.scrollTop = output.scrollHeight;
  } else if (e.key === "ArrowUp") {
    if (historyIndex > 0) {
      historyIndex--;
      commandInput.value = commandHistory[historyIndex];
    }
  } else if (e.key === "ArrowDown") {
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      commandInput.value = commandHistory[historyIndex];
    } else {
      commandInput.value = '';
    }
  }
});

function typeWriter(text, callback, speed = 40) {
    isOutputting = true;
    showWarningIcon(true);
    let i = 0;
  
    function type() {
      if (i >= text.length) {
        isOutputting = false;
        showWarningIcon(false);
        callback && callback();
        return;
      }
  
      // Detect if next part is an HTML tag
      if (text[i] === "<") {
        const closeIdx = text.indexOf(">", i);
        const tag = text.slice(i, closeIdx + 1);
        const restStart = closeIdx + 1;
        const closingTag = `</${tag.match(/<(\w+)/)[1]}>`;
        const closeTagIdx = text.indexOf(closingTag, restStart);
        const fullHTML = text.slice(i, closeTagIdx + closingTag.length);
  
        output.innerHTML += fullHTML;
        i = closeTagIdx + closingTag.length;
      } else {
        output.innerHTML += text[i];
        i++;
      }
  
      output.scrollTop = output.scrollHeight;
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      setTimeout(type, speed);
    }
  
    type();
  }
  
  
  

function showWarningIcon(show) {
  const icon = document.getElementById("warnIcon");
  icon.style.opacity = show ? '1' : '0';
  icon.style.pointerEvents = show ? 'auto' : 'none';
}

function getTextWidth(text, style) {
  const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
  const context = canvas.getContext("2d");
  context.font = `${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
  return context.measureText(text).width;
}

function updateCursorPosition() {
  const style = getComputedStyle(commandInput);
  const width = getTextWidth(commandInput.value, style);
  cursor.style.left = `${width + 5}px`;
}

function showCursor(active) {
  cursor.classList.toggle('inactive', !active);
}

commandInput.addEventListener("input", updateCursorPosition);
commandInput.addEventListener("focus", () => {
  showCursor(true);
  updateCursorPosition();
});
commandInput.addEventListener("blur", () => {
  showCursor(false);
});
commandInput.addEventListener("click", updateCursorPosition);
window.addEventListener("resize", updateCursorPosition);

setInterval(updateStatusBar, 1000);
typeWriter(getNeoFetch(), () => output.innerHTML += '\n', 10);
