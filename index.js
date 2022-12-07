const express = require("express");

const setuoDb = require("./db/db-setup");
const router = require("./routes");

const PORT = 5000;
const app = express();

setuoDb();
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
