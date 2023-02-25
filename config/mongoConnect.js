const mongoose = require("mongoose");
const DB_URI =
  "mongodb+srv://root:WY4FXtZ29YEBr0Xs@cluster0.zl24jhu.mongodb.net/mydb?retryWrites=true&w=majority";

function mongoConnect() {
  mongoose.connect(
    DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (error, response) => error ? console.log("*** error de conexion ***") : console.log("*** conexion hecha ***")
  );
}

module.exports = mongoConnect;
