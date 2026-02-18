const http = require('http');
const fs = require('fs');

const PORTS = [1337];
const HOSTS = ['localhost', '127.0.0.1', '::1'];
const LOG_FILE = 'connection_test_log.txt';

fs.writeFileSync(LOG_FILE, '--- STARTING CONNECTION TEST ---\n');

function log(msg) {
    console.log(msg);
    fs.appendFileSync(LOG_FILE, msg + '\n');
}

async function testConnection(host, port) {
    return new Promise((resolve) => {
        log(`Testing http://${host}:${port}...`);
        const req = http.request({
            hostname: host,
            port: port,
            path: '/admin', // strapi admin path usually responds
            method: 'GET',
            timeout: 2000
        }, (res) => {
            log(`[SUCCESS] ${host}:${port} responded with ${res.statusCode}`);
            resolve(true);
        });

        req.on('error', (e) => {
            log(`[FAILED] ${host}:${port} - ${e.code || e.message}`);
            resolve(false);
        });

        req.on('timeout', () => {
            req.destroy();
            log(`[TIMEOUT] ${host}:${port}`);
            resolve(false);
        });

        req.end();
    });
}

async function run() {
    for (const host of HOSTS) {
        await testConnection(host, 1337);
    }
    log('--- TEST COMPLETE ---');
}

run();
