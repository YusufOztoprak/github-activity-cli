# 🐙 GitHub Activity Tracker (CLI)

A simple **Command Line Interface (CLI)** application that fetches and displays a GitHub user's recent activity.

This project uses the [GitHub Public API](https://docs.github.com/en/rest/activity/events?apiVersion=2022-11-28) to retrieve recent events like pushes, issues, stars, and more.

---

## 🚀 Features

- 🔍 Fetch recent GitHub activity of any user
- 🖥️ Display output directly in the terminal
- ✅ Handle common activity types: Push, Issues, Watch (Star), etc.
- ❗ Graceful error handling for invalid usernames or connection issues
- 💡 Lightweight – no external libraries used

---

## 📦 Installation

```bash
git clone https://github.com/YusufOztoprak/github-activity-cli.git
cd github-activity-cli
npm install
