import fs from "fs";
import { join, dirname } from 'path';
import crypto from "crypto";
import { config } from "dotenv";

config();

const currentDirectory = dirname(new URL(import.meta.url).pathname);

export const port = process.env.PORT;

export const db_host = process.env.DB_HOST;
export const db_port = process.env.DB_PORT;
export const db_name = process.env.DB_NAME;
export const db_username = process.env.DB_USERNAME;
export const db_pass = decrypt_password(process.env.DB_PASS);

function decrypt_password(msg) {

    const privateKey = Buffer.from(
        fs.readFileSync(join(currentDirectory, '..', 'private_key.pem'), { encoding: "utf-8" })
    );

    const decryptedData = crypto.privateDecrypt(
        {
            key: privateKey,
            padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
            oaepHash: "sha256",
        },
        Buffer.from(msg, "base64")
    );

    return decryptedData.toString("utf-8");
};
