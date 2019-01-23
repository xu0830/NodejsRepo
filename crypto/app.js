var crypto = require("crypto");

const buf1 = Buffer.alloc(10, 1);

const buf4 = Buffer.from([1, 2, 3]);

const presetKey = Buffer.from('0CoJUm6Qyw8W8jud')

const base62 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

const secretKey = crypto.randomBytes(16).map(n => (base62.charAt(n % 62).charCodeAt()));

console.log(secretKey);
console.log(buf1);
console.log(buf4);
console.log(presetKey);