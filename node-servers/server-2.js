const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3001;

// respond with which server handled the request
app.get("/", (req, res) => {
  res.send(`Hello from Server on PORT: ${PORT}`);
});

app.post("/data", (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}, handled by Server on PORT: ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
