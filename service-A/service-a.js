const express = require('express');

const app = express();
const port = 3001;

// app.get('/api/data', (req, res) => {
//   console.log(`Received request to /api/data: ${req.method} ${req.url}`);
//   res.status(200).send('Response from Service A');
// });

// Query Tuition endpoint
app.get('/v1/query-tuition', (req, res) => {
  const student_no = req.query.student_no;
  // Here you can implement the logic to query tuition data from your database
  // For now, let's just send some sample response
  const tuition_total = 5000;
  const balance = 2000;
  res.status(200).json({ tuition_total, balance });
});

app.listen(port, () => {
  console.log(`Service A listening on port ${port}`);
});
