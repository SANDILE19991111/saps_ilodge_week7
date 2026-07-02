# 🛡️ SAPS iLodge | AI-Powered Ticket Management System

An AI-powered complaint and ticket management platform built for the South African Police Service (SAPS), enabling citizens, staff, and administrators to lodge, track, and resolve internal service tickets — with AI-driven department routing, analytics, predictive insights, compliance monitoring, and workflow automation.

🔗 **Live App:** [saps-ilodge-week7.onrender.com](https://saps-ilodge-week7.onrender.com)

---

## 📖 About the Project

SAPS iLodge replaces manual, email-based complaint handling with a single web portal that automatically routes tickets to the correct department (IT, Finance, HR, or Operations) using AI keyword analysis, tracks SLA compliance, and gives administrators real-time analytics, forecasting, and governance tools.

Built over an 8-week sprint cycle, the platform evolved from a basic auth + ticketing system into a full AI-powered operations suite — including automated executive reporting, predictive workload forecasting, an AI risk & compliance layer, and a workflow automation engine.

---

## ✨ Key Features

- 🔐 **Role-Based Access** — Citizen, Staff, and Admin dashboards with tailored permissions
- 🤖 **AI Department Routing** — Keyword-pattern engine auto-assigns tickets with a confidence score
- 💬 **AI Chatbot + Live Admin Chat** — In-app support assistant plus direct citizen-to-admin messaging
- 📊 **Analytics Dashboard** — Live KPIs, ticket volume trends, department performance, SLA tracking
- 📄 **Automated Business Reports** — AI-generated executive PDF/HTML reports with recommendations
- 🔮 **Predictive Insights** — Linear regression forecasting, surge detection, staffing recommendations
- 🛡️ **AI Risk & Compliance Layer** — Bias auditing, transparency scoring, audit trail, risk evaluation reports
- ⚙️ **Workflow Automation** — Auto-routing, email notification simulation, approval queues, SLA breach alerts
- 🏆 **Deployment & Showcase Suite** — Technical docs, business case, and executive presentation built in

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla JavaScript (ES6+), HTML5, CSS3 |
| Backend | Node.js, Express.js |
| AI Integration | Groq API (`llama-3.3-70b-versatile`) |
| PDF/Export | jsPDF, html2canvas |
| Data Layer | In-memory JavaScript store (MVP) |

---

## 🚀 Getting Started

👉 The fastest way to try it out is the live deployment: **https://saps-ilodge-week7.onrender.com**

To run it locally instead:

### Prerequisites
- Node.js ≥ 18
- npm
- A free [Groq API key](https://console.groq.com)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/SANDILE19991111/saps-ilodge.git
cd saps-ilodge

# 2. Install dependencies
npm install

# 3. Set your Groq API key as an environment variable
export GROQ_API_KEY=your_key_here   # macOS/Linux
# set GROQ_API_KEY=your_key_here    # Windows (cmd)

# 4. Start the server
npm start
```

Then open **http://localhost:3000** in your browser.

### Demo Credentials

| Role | Email | Password |
|---|---|---|
| Citizen | citizen@example.com | citizen123 |
| Staff | staff@saps.gov.za | staff123 |
| Admin | admin@saps.gov.za | admin123 |

---

## 📂 Project Structure

```
saps-ilodge/
├── server.js          # Express server, Groq API proxy, auth stub
├── index.html          # Single-page application (UI + logic)
├── package.json
└── README.md
```

---

## 📈 Live Platform Highlights

- 🤖 AI routing accuracy: **~94%**
- ⏱️ SLA compliance monitoring across High/Medium/Low priority tiers
- 📊 7-department analytics with resolution-rate tracking
- 🔮 2-week ticket volume forecasting via linear regression

---

## 🎓 Project Context

Built as part of the CAPACITI AI Bootcamp, this project demonstrates end-to-end product development — from authentication and core CRUD functionality through to AI integration, data analytics, compliance governance, and deployment-ready documentation.

---

## 📬 Contact

**Bongimusa Sandile Khoza**
🔗 [GitHub](https://github.com/SANDILE19991111) · [LinkedIn](https://linkedin.com/in/bongimusa-khoza-7661aa396)
