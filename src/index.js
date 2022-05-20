const express = require("express");

const app = express();

require("./database");

const PORT = process.env.port || 3000;

app.use(require("../src/routes/index.routes"));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
