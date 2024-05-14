const express = require('express');
const app = express();
const port = process.env.PORT || 5050;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});