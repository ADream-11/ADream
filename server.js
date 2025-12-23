// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Hardcoded users
const users = {
  admin: "admin123",
  student: "pass456",
  user1: "hello789",
  "ADream": "adream#2478"
};

// POST /login route
app.post('/login', (req, res) => {
  const { userId, password } = req.body;

  if (users[userId] && users[userId] === password) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
