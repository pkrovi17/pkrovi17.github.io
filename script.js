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
  // if width lower than 768pix, hide status bar
  const width = window.innerWidth;
  if (width < 768) {
    statusBar.style.display = 'none';
    return;
  } else {
    statusBar.style.display = 'flex';
  }
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

  ██████╗ ██╗  ██╗██████╗ 
  ██╔══██╗██║ ██╔╝██╔══██╗
  ██████╔╝█████╔╝ ██████╔╝
  ██╔═══╝ ██╔═██╗ ██╔══██╗
  ██║     ██║  ██╗██║  ██║
  ╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝  

<strong>user</strong>       : you  
<strong>browser</strong>    : ${getPlatformInfo()}
<strong>uptime</strong>     : ${getUptime()}
<strong>timezone</strong>   : ${Intl.DateTimeFormat().resolvedOptions().timeZone}
<strong>ip addr</strong>    : ${getRandomIP()}
<strong>for help</strong>   : type <strong>help</strong>`;
}

function handleCommand(cmd) {
  const lowerCmd = cmd.trim().toLowerCase();

  if (lowerCmd.startsWith('echo ')) {
    return cmd.slice(5);
  }

  switch (lowerCmd) {
    case 'help':
      return `Available commands:
- <strong>about</strong> ........... about me
- <strong>projects</strong> ........ list of projects and links
- <strong>resume</strong> .......... view my resume
- <strong>contact</strong> ......... email + github + phone + linkedin
- <strong>sysinfo</strong> ......... system diagnostics
- <strong>echo</strong> ............ repeat what you say
- <strong>clear</strong> ........... clear the terminal`;
    case 'about':
      return "Hi, I'm Pranav Krovi, a Computer Engineering student at the University of Wisconsin–Madison with a strong foundation in software development, data systems, and embedded technology. \nWith experience ranging from full-stack web development to real-time telemetry systems for off-road vehicles, I thrive at the intersection of hardware and software.";
    case 'projects':
      return `<strong>SMB Revenue Service</strong>\nA Flask-based web application for analyzing financial data from small-to-medium businesses using AI-powered insights and forecasting.\nhttps://github.com/pkrovi17/SMB-RevenueService\n\n<strong>Automotive Suite</strong>\nA comprehensive fleet monitoring solution that transforms Kafka vehicle data into actionable real-time dashboards for tracking and managing vehicle fleets.\nhttps://github.com/pkrovi17/AutomotiveSuite\n\n<strong>AimTracer</strong>\nA real-time FPS aim-tracking assistant using Python and OpenCV. X-Box style aim tracer to help aiming on pc systems. Utilizes AI models to be applicable to most games.\nhttps://github.com/pkrovi17/AimTracer\n\n<strong>Facial Recognition System</strong>\nImplementing a haar - cascade model to detect faces and label them on a live display. This is a simple face recognition project built with Python and OpenCV. It uses the Haarcascade classifier for face detection and the Local Binary Patterns Histograms (LBPH) recognizer for identifying faces.\nhttps://github.com/pkrovi17/Facial-Recognition\n\n<strong>SSH Type</strong>\nA terminal-based typing test meant to be accessible over SSH. Built using ncurses, it delivers a retro, real-time typing experience with a blinking amber cursor, live WPM tracker, and animated text flow.\nhttps://github.com/pkrovi17/SSH-Type\n\n<strong>Document Merge</strong>\nA Python-based GUI application for merging multiple Word documents (.docx files) into a single document.\nhttps://github.com/pkrovi17/DocumentMerge`;
    case 'contact':
      return`<strong>Email:</strong> pkrovi1@gmail.com\n<strong>Github:</strong> github.com/pkrovi17\n<strong>Phone:</strong> +1 (916) 693 - 8802\n<strong>LinkedIn:</strong> https://www.linkedin.com/in/pranav-krovi/`;
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
      case 'resume':
        window.open("https://drive.google.com/file/d/137aiK8vAJ7wUgc72znWRATBiwcuBiwEE/view?usp=sharing", "_blank");
        return "Opening resume in new tab...";
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
        typeWriter(`\n${response}`, () => {}, 10);
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

function typeWriter(text, callback, speed = 10) {
    isOutputting = true;
    showWarningIcon(true);
    let i = 0;
    let scrollCounter = 0;
    const scrollInterval = 3; // Only scroll every 3 characters
    let buffer = ''; // Buffer for better performance
  
    function type() {
      if (i >= text.length) {
        // Flush any remaining buffer
        if (buffer) {
          output.innerHTML += buffer;
          buffer = '';
        }
        isOutputting = false;
        showWarningIcon(false);
        callback && callback();
        return;
      }
  
      // Detect if next part is an HTML tag
      if (text[i] === "<") {
        const closeIdx = text.indexOf(">", i);
        if (closeIdx !== -1) {
          const tag = text.slice(i, closeIdx + 1);
          const restStart = closeIdx + 1;
          const tagMatch = tag.match(/<(\w+)/);
          
          if (tagMatch) {
            const closingTag = `</${tagMatch[1]}>`;
            const closeTagIdx = text.indexOf(closingTag, restStart);
            if (closeTagIdx !== -1) {
              const fullHTML = text.slice(i, closeTagIdx + closingTag.length);
              buffer += fullHTML;
              i = closeTagIdx + closingTag.length;
            } else {
              buffer += text[i];
              i++;
            }
          } else {
            buffer += text[i];
            i++;
          }
        } else {
          buffer += text[i];
          i++;
        }
      } else {
        buffer += text[i];
        i++;
      }
      
      // Flush buffer every few characters for better performance
      if (buffer.length >= 5 || i >= text.length) {
        output.innerHTML += buffer;
        buffer = '';
      }
      
      // Only scroll every few characters to reduce DOM operations
      scrollCounter++;
      if (scrollCounter >= scrollInterval) {
        output.scrollTop = output.scrollHeight;
        document.querySelector(".terminal").scrollTop = document.querySelector(".terminal").scrollHeight;
        scrollCounter = 0;
      }
      
      setTimeout(type, speed);
    }
    // typer
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
typeWriter(getNeoFetch(), () => output.innerHTML += '\n', 5);

const dropdown = document.querySelector(".dropdown");
const toggle = document.querySelector(".dropdown-toggle");

toggle.addEventListener("click", () => {
  dropdown.classList.toggle("open");
});
