
console.log("---------------------------------------------------");
console.log("🔍 DIAGNOSTIC: CHECKING ENVIRONMENT VARIABLES");
console.log("---------------------------------------------------");

const key = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
const secret = process.env.CLERK_SECRET_KEY;

if (key) {
    console.log(`✅ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: Found (${key.substring(0, 10)}...)`);
} else {
    console.error("❌ NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: MISSING OR EMPTY");
}

if (secret) {
    console.log(`✅ CLERK_SECRET_KEY: Found (${secret.substring(0, 10)}...)`);
} else {
    console.error("❌ CLERK_SECRET_KEY: MISSING OR EMPTY");
}

console.log("---------------------------------------------------");
