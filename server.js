const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// HTTP to HTTPS automatic redirect
// app.use((req, res, next) => {
//   const reqProtocol = req.headers['x-forwarded-proto'];

//   if (reqProtocol === 'http') {
//     res.redirect(`https://${req.headers.host}${req.url}`);
//     res.end();
//   } else {
//     next();
//   }
// });

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/report', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'report.html'));
});

app.use('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start server

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${port}`);
});
