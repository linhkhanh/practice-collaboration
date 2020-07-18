const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => { res.send('Hello word!') });

app.listen(port, () => {
    console.log(`app listening on port: ${port}`)
  });
  