const express = require("express");
const connectDataabase = require("./config/db");

const app = express();  
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./routes/api"));

async function startServer() {
    await connectDataabase();
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

startServer();