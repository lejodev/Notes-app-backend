const express = require("express");
const userRoute = require("./routes/user.route");
const noteRoute = require("./routes/note.route");

const app = express();

require("./database");

const PORT = process.env.port || 3000;

app.use(express.json());
app.use("/api/user/", userRoute);
app.use("/api/note/", noteRoute);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
