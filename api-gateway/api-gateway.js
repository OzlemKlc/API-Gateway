const express = require('express');
const httpProxy = require('http-proxy');
//const bodyParser = require('body-parser'); // body-parser eklendi

const app = express();
const proxy = httpProxy.createProxyServer();

const serviceAUrl = 'http://service-A:3001';
const serviceBUrl = 'http://service-B:3002';
const serviceCUrl = 'http://service-C:3003';
// Middleware to parse JSON bodies
//app.use(bodyParser.json()); // JSON gövdeleri için body-parser kullanıldı
// Middleware to parse JSON bodies
app.use(express.json());


// Query Tuition endpoint
app.get('/v1/query-tuition', (req, res) => {
  const student_no = req.query.student_no;

  // Forward the request to the appropriate service
  proxy.web(req, res, { target: serviceAUrl }, (err) => {
    console.error(`Error forwarding request to service A: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// // Pay Tuition endpoint
// app.post('/v1/pay-tuition', (req, res) => {
//   const student_no = req.body.student_no;
//   const term = req.body.term;

//   // Forward the request to the appropriate service
//   proxy.web(req, res, { target: serviceBUrl }, (err) => {
//     console.error(`Error forwarding request to service B: ${err.message}`);
//     res.status(500).json({ error: 'Internal Server Error' });
//   });
// });

// Login endpoint
app.post('/v1/login', (req, res) => {
  // Forward the request to the appropriate service
  proxy.web(req, res, { target: serviceCUrl }, (err) => {
    console.error(`Error forwarding request to service C: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// Query Tuition endpoint for Banking App with authentication
app.get('/v1/banking/query-tuition', (req, res) => {
  const student_no = req.query.student_no;

  // Forward the request to the appropriate service
  proxy.web(req, res, { target: serviceBUrl }, (err) => {
    console.error(`Error forwarding request to service B: ${err.message}`);
    res.status(500).json({ error: 'Internal Server Error' });
  });
});

// // Forward other requests to service B
// app.all('*', (req, res) => {
//   proxy.web(req, res, { target: serviceBUrl }, (err) => {
//     console.error(`Error forwarding request to service B: ${err.message}`);
//     res.status(500).json({ error: 'Internal Server Error' });
//   });
// });

// Add this middleware to log the request received by the proxy
proxy.on('proxyReq', function (proxyReq, req, res, options) {
  console.log(`Received request to ${options.target.href}: ${req.method} ${req.url}`);
});

const port = 3000;
app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});
