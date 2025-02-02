import express from "express";
import os from "os";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`Hello from Pod ${os.hostname()}! Version: 1.0.1`); // Change the version number
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});