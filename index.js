const PORT = 4000;
const express = require("express");
const mongoConnect = require("./config/mongoConnect");
const cors = require("cors");

mongoConnect();

const app = express();
app.use(cors());
app.use(express.json());

 app.use("/", require("./routes")); 
/* app.use("/", (req, res) => {
  res.send({ data: "A1" });
}); */
app.listen(PORT);
