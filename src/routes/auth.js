import express from "express";

import Users from "../db/models/Users.js";

const router = express.Router();

router.post("/verify", async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await Users.findOne({ where: { username: username } });

        res.send(await user.comparePassword(password));

    } catch (e) {
        console.log(e);
        res.send(e);
    }
});

export default router;
