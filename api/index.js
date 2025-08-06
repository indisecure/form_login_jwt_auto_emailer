const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());
const connectDB = require('./db');
connectDB();
app.use(express.json());
let SECRET;
try {
  SECRET = process.env.JWT_SECRET;
  if (!SECRET) throw new Error('JWT_SECRET missing');
} catch (error) {
  console.error('JWT_SECRET Error:', error.message);
  process.exit(1); 
}
const User = require('./models/userModel');
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const passwordHash = await bcrypt.hash(password, 10);
  try {
    const user = new User({ email, passwordHash });
    await user.save();
    res.json({ message: 'User registered' });
  } catch (err) {
    res.status(400).json({ message: 'User already exists or error occurred' });
  }
});
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Unauthorized' });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: 'Unauthorized' });
  const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: '1h' });
  res.json({ token });
});
app.use(express.static(path.join(__dirname, 'dist')));
// to use wild route express version must be  "express": "^4.18.2",
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Running on port ${process.env.PORT }`);
});


// to get JWT_SECRET thru terminal
//node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"