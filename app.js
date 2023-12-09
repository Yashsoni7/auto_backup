import express from "express";

import * as config from "./src/config.js"
import backup from "./src/routes/backup.js"
import auth from "./src/routes/auth.js"

const app = express();

app.use(express.json());

app.use('/backup', backup);
app.use('/auth', auth);

app.get('/test', (req, res) => {
    res.send("Life is Good");
});

app.listen(config.port, () => {
    console.log(`Running server on http://localhost:${config.port}`);
});
