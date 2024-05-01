const express = require('express');

const app = express();
const port = 3002;
// Middleware to parse JSON bodies
app.use(express.json());

// app.get('/api/info', (req, res) => {
//   console.log(`Received request to /api/info: ${req.method} ${req.url}`);
//   res.status(200).send('Response from Service B');
// });

// Query Tuition endpoint for Banking App with authentication
app.get('/v1/banking/query-tuition', (req, res) => {
  const student_no = req.query.student_no;

  // Burada gerekirse doğrudan veritabanı sorgusu yapabilir veya başka bir işlem yapabilirsiniz.
  // Şu anlık örnek bir yanıt döndürüyoruz.
  res.status(200).json({ message: 'Query tuition for banking app with authentication' });
});

app.listen(port, () => {
  console.log(`Service B listening on port ${port}`);
});
