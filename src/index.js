
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");
const { dbConnection } = require("./db/config");
const app = express();
app.use(cors());
//dbConnection()
const port = process.env.PORT || 3443;
app.use(express.json());
routerApi(app);
app.listen(port, () => {
  console.log("Servidor Corriendo en puerto \x1b[32m%s\x1b[0m", port);
});
