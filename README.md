# 🖥️ Pranav Krovi — Developer Portfolio

Welcome to my **terminal-inspired portfolio** — a web-based interactive shell where visitors can explore my background, projects, contact details, and more, all through a classic command-line interface.

Built with a retro aesthetic and modern interactivity, this website simulates a terminal environment featuring real-time system info, ASCII art, command history, and animated typing effects.

---

## Features

- Animated terminal boot screen (Neofetch style)
- Custom system info: Time, Uptime, Browser, Timezone
- Command prompt with history navigation
- Typing animation for all output
- Input lock during output + warning icon
- Animated dropdown menu with links (GitHub, LinkedIn, Resume)
- Project previews and clickable links
- Fully responsive and resizable interface

---

## Available Commands

| Command      | Description                                     |
|--------------|-------------------------------------------------|
| `help`       | Show all available commands                     |
| `about`      | Short personal introduction                     |
| `contact`    | Email, GitHub, Phone, and LinkedIn              |
| `projects`   | Featured GitHub projects with descriptions      |
| `sysinfo`    | Shows browser, time, timezone, and uptime       |
| `uptime`     | Current session runtime                         |
| `neofetch`   | Boot-style ASCII system info banner             |
| `clear`      | Clears the terminal output                      |
| `echo [msg]` | Repeats whatever message you type               |
| `resume`     | Opens resume in a new tab                       |
| `dither`     | Launches the Dithershop app                     |

---

## Tech Stack

- HTML, CSS, JavaScript
- Google Fonts: Courier Prime
- Animated CLI typing logic
- Responsive layout with aspect-ratio-based sizing
- Interactive dropdown and fullscreen handling

---

## Tip

Try typing `projects` or `contact` in the terminal — or click the ☰ menu in the corner for quick access.

## Resume keyword search

The top-right keyword search link opens `/keyword-search/`. The page displays a
rendered preview of `resume(1).pdf`, highlights literal, case-insensitive keyword
or phrase matches, and assembles matching resume excerpts by role. Results run
entirely in the browser; no AI API or server is required. The original PDF is
available from the page’s **open PDF** link.

After updating `resume(1).pdf`, rebuild the matching preview and word-position index:

```sh
python3 scripts/build-resume-search.py
node --test tests/*.test.cjs tests/*.test.mjs
```

The build script requires Poppler’s `pdftotext` and `pdftoppm`. Commit the PDF,
`keyword-search/resume.json`, and generated `keyword-search/page-*.png` together.
Changing the Google Drive link alone does not update this local search copy.
Preview through a local HTTP server (for example `python3 -m http.server`), since
browsers restrict fetching the index from `file://` pages.
