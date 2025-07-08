const https = require('https');

const username = process.argv[2];

if (!username) {
    console.log('❌ Please enter a GitHub username.');
    process.exit(1);
}

const options = {
    hostname: 'api.github.com',
    path: `/users/${username}/events`,
    method: 'GET',
    headers: {
        'User-Agent': 'node.js',
        'Accept': 'application/vnd.github.v3+json'
    }
};


const req = https.request(options, (res) => {
    let data = '';

    res.on('data', chunk => {
        data += chunk;
    });

    res.on('end', () => {
        if (res.statusCode !== 200) {
            console.log(`❌ Failed to fetch activity. Status code: ${res.statusCode}`);
            return;
        }

        try {
            const events = JSON.parse(data);

            if (events.length === 0) {
                console.log('📭 No recent activity found.');
                return;
            }

            console.log(`🧾 Recent activity for @${username}:\n`);

            events.slice(0, 10).forEach(event => {
                switch (event.type) {
                    case 'PushEvent':
                        console.log(`🚀 Pushed to ${event.repo.name}`);
                        break;
                    case 'IssuesEvent':
                        console.log(`🐛 Opened an issue in ${event.repo.name}`);
                        break;
                    case 'WatchEvent':
                        console.log(`⭐ Starred ${event.repo.name}`);
                        break;
                    default:
                        console.log(`🔔 ${event.type} in ${event.repo.name}`);
                }
            });
        } catch (error) {
            console.log('❌ Error parsing data:', error.message);
        }
    });
});

req.on('error', (err) => {
    console.log('❌ Request error:', err.message);
});

req.end();
