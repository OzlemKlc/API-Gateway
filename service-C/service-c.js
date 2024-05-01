const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3003;

// Middleware to parse JSON bodies
app.use(express.json());

// Login endpoint
app.post('/v1/login', (req, res) => {
  const student_no = req.body.student_no;

  // Student number validation
  if (!student_no) {
    return res.status(400).json({ msg: 'Student number not provided' });
  }

  // Authentication process
  if (authenticate_student(student_no)) {
    // If authentication is successful, create an access token
    const access_token = jwt.sign({ student_no }, 'secret_key');
    res.json({ access_token });
  } else {
    // If authentication fails, return an error
    res.status(401).json({ msg: 'Invalid student number' });
  }
});

// Mock authentication function
function authenticate_student(student_no) {
  // Mock authentication logic
  return student_no === 'valid_student_no';
}

app.listen(port, () => {
  console.log(`Service C listening on port ${port}`);
});
