const crypto = require('crypto');

const algorithm = 'aes-256-cbc';
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const data = "This is encrypted data";

function encrypt(data)
{
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return {
        iv : iv.toString('hex'),
        encrypted : encrypted
    }
}

function decrypt(data, ivHex)
{
    let iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted; 
}

const {encrypted, iv:ivHex} = encrypt(data)
const decrypted = decrypt(encrypted, ivHex);

console.log(encrypted);
console.log(decrypted);


