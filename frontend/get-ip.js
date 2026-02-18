const os = require('os');
const fs = require('fs');

const interfaces = os.networkInterfaces();
let ipAddress = '127.0.0.1';

for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
        // Skip over non-IPv4 and internal (i.e. 127.0.0.1) addresses
        if ('IPv4' !== iface.family || iface.internal) {
            continue;
        }
        ipAddress = iface.address;
        break;
    }
}

fs.writeFileSync('ip.txt', ipAddress);
console.log(`IP detected: ${ipAddress}`);
