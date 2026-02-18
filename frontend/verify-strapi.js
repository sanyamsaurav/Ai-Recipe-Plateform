const STRAPI_URL = 'http://127.0.0.1:1337';
const STRAPI_API_TOKEN = '689a5e9e5d2c1e43aee86a7ce08796ef0438322d5f0237478ee519d246d6807c8632a2c3093ef8e0e32784b2cab79a4c8bd25de04d9e375d1346adbe892078c8df71986b15a9e09a207cdb918bb28c1fcd0ed604ecb252be5100bf97955f7b1baeef720a933ccb7f8d368cddb96f4752cbaeda32b0e99fa158d5d0aca92ce608';

console.log(`Node Version: ${process.version}`);
console.log(`Testing connection to: ${STRAPI_URL}/api/users`);

async function verify() {
    try {
        const response = await fetch(`${STRAPI_URL}/api/users`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${STRAPI_API_TOKEN}`,
            },
        });

        console.log(`Response Status: ${response.status}`);
        const text = await response.text();
        console.log(`Response Body Preview: ${text.substring(0, 100)}`);

        if (response.ok) {
            console.log("✅ SUCCESS");
        } else {
            console.log("❌ HTTP ERROR");
        }
    } catch (error) {
        console.error("❌ FETCH ERROR:", error.message);
        if (error.cause) {
            console.error("❌ CAUSE:", error.cause);
        }
    }
}

verify();
