# 🚀 Nexus AI
An AI-powered **productivity assistant** built with **Electron.js**.  
Nexus AI provides **smart note-taking and task management** in a **floating UI**, helping users stay organized efficiently.

---

## 📖 **Overview**
Nexus AI is a desktop application designed for **seamless productivity**. It combines **Electron.js** with a **custom UI** to offer AI-powered assistance for managing notes, reminders, and tasks.

---

## 🛠 **Features**
✅ **Electron-based desktop app** – Runs on Windows, macOS, and Linux  
✅ **Custom UI** – Built with **HTML, CSS, and JavaScript**  
✅ **Preload script** – Ensures **secure communication** between processes  
✅ **Floating UI** – Always accessible while you work  
✅ **Minimized & Close Button** – Custom window controls (no default Electron title bar)  
✅ **Expandable AI Integration** – Future-ready for AI-powered enhancements  

---

## 📂 **Project Structure**
nexus-ai/ │── src/ │ │── index.js # Electron Main Process │ │── preload.js # Secure Bridge Between Processes │ │── renderer.js # Frontend UI Logic │ │── pages/ │ │ ├── home.html # Main UI (Frontend) │ │ ├── signin.html # Sign-in Page │ │ ├── signup.html # Sign-up Page │ │── assets/ │ │ ├── icon.png # App Icon │ │ ├── logo.png # Branding │ │── styles/ │ │ ├── styles.css # Main Stylesheet │ │── scripts/ │ │ ├── auth.js # Authentication Script │── package.json # npm Configuration │── package-lock.json # Auto-generated lockfile │── .gitignore # Ignore node_modules │── README.md # Documentation


---

## 📥 **Installation & Setup**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Dunit05/nexus.ai-frontend
cd nexus-ai
npm install
npm start
```

---

## 🚀 Usage Guide
✅ **On launch**, Nexus AI will open the Authentication Window (Sign-in / Sign-up).
✅ **After login**, the main productivity dashboard will appear.
✅ **Use the floating boxex** to pick a function to assist you in managing tasks.
✅ **Click Close (✖)** in the custom title bar for window controls.

---

## 🤝 Contributing
We welcome contributions! Follow these steps:

**Fork the repository.**
**Create a new branch (git checkout -b feature-name).**
**Commit your changes (git commit -m "Added new feature").**
**Push to GitHub (git push origin feature-name).**
**Submit a Pull Request for review.**

---

## 📄 License
This project is open-source and available under the MIT License.

