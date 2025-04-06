const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.text());

app.post("/proxy", async (req, res) => {
    try {
        const response = await axios.post(
            "https://smart-helmet-data-monitoring-web-app.onrender.com/mongo/image/data",
            req.body,
            { headers: { "Content-Type": "text/plain" } }
        );

        res.status(response.status).send("API request forwarded to backend");

    } catch (error) {
        console.log(error.message);
        res.status(500).send("Proxy Error");
    }
})

app.listen(3000, () => {
    console.log("Proxy server started listening on port 3000");
})