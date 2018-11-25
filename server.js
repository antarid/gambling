const express = require('express');
const app = express();

// app.use(express.static('build'));

// app.get('*', (req, res) => {
//   res.sendFile(`${__dirname}/build/index.html`);
// });

app.get('/', (req, res) => {
  res.send('hello word');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('server is working on port: ' + port);
});
