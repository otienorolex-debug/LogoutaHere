markdown
# LogOuttaHere 🚀

**LogOuttaHere** is a minimalist, local-first browser extension designed to protect your privacy by instantly terminating active login sessions across major web platforms with a single click.

## ✨ Features
* **One-Input Design:** Simply enter your connected email address to initiate a purge.
* **Instant Session Destruction:** Automatically locates and wipes authentication cookies locally.
* **Zero-Knowledge Privacy:** 100% of the processing happens on your machine. Your personal data or email addresses are never sent to external servers.
* **Modern UI:** Features a sleek dark-mode dashboard with an operational progress indicator.

## 🛠️ Architecture
The project runs entirely on client-side browser runtimes using the following structure:
* `manifest.json` - Configuration and permission routing declarations.
* `popup.html` - Minimalist user interface built with HTML5/CSS3.
* `popup.js` - Core session-scanning and cookie-purging engine.

## 🚀 How to Install (Developer Mode)
1. Open Google Chrome (or any Chromium-based browser).
2. Navigate to `chrome://extensions/` in your address bar.
3. Toggle the **Developer mode** switch in the top-right corner to **On**.
4. Click the **Load unpacked** button in the top-left corner.
5. Select this directory (`LogOuttaHere`) to register the extension.
6. Open your extension drawer (🧩) and pin **LogOuttaHere** to your toolbar for instant access.

## 🔒 Security Notice
This utility operates directly inside the browser's sandbox using the `chrome.cookies` configuration API. It deletes active session tokens locally on your current device to instantly revoke active login authentication states.