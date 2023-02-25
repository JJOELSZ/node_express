const PORT = 4000;
const express = require("express");
const mongoConnect = require("./config/mongoConnect");
const cors = require("cors");

mongoConnect();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes"));
/* app.use("/", (req, res) => {
  res.send({ data: "A1" });
}); */
app.listen(PORT, () => {
  console.log(`Mi app esta corriendo en el puerto ${PORT}`);
});
