const express = require("express");
const app = express();
app.use(express.json());

// Unique server ID (so we know which one handled the request)
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Hello from Server running on port ${PORT}`);
});

app.post("/data", (req, res) => {
  const { name } = req.body;
  res.send(`Hello ${name}, response from server on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
