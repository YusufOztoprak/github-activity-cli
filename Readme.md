🐙 GitHub Activity Tracker (CLI)

    A simple Command Line Interface (CLI) application that fetches and displays a GitHub user's recent public activity.

    This project uses the GitHub Public API to retrieve recent events like pushes, issues, stars, and more.

🚀 Features

    🔍 Fetch recent GitHub activity of any user

    🖥️ Display output directly in the terminal

    ✅ Handle common activity types: Push, Issues, Watch (Star), etc.

    ❗ Graceful error handling for invalid usernames or connection issues

    💡 Lightweight – no external libraries used

📦 Installation

    git clone https://github.com/YusufOztoprak/github-activity-cli.git
    cd github-activity-cli

▶️ Usage

    node github-activity-cli.js <github-username>

    Example:

    node github-activity-cli.js torvalds

⚙️ How It Works

    Uses Node.js https module to send a GET request to the GitHub API's /users/:username/events endpoint.

    Receives the response in chunks and concatenates them into a complete JSON string.

    Parses the JSON response to display the last 10 events in a human-readable format.

📌 Example Output

    🧾 Recent activity for @torvalds:

    🚀 Pushed to torvalds/linux
    ⭐ Starred someuser/somerepo
    🔔 ForkEvent in torvalds/somerepo

⚠️ Notes & Limitations

    GitHub imposes a rate limit for unauthenticated requests (60 per hour). Consider using a token to avoid this.

    Invalid usernames return a 404 error.

    Large responses are stored in memory before parsing, which may be inefficient for huge datasets.

🔧 Possible Improvements

    Use res.setEncoding('utf8') for cleaner string handling.

    Use Buffer.concat for more control over data accumulation.

    Add GitHub token authentication for higher rate limits.

    Switch to fetch (Node 18+) or axios for simpler HTTP requests.

    Implement pagination support.

    Improve error handling and add request timeouts.

🔒 Security

    Never hardcode API tokens in the source code. Use environment variables like process.env.GITHUB_TOKEN.

🤝 Contributing

    Contributions, bug reports, and suggestions are welcome!