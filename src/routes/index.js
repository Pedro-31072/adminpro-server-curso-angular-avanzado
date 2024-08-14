const { Router } = require("express");
const DoctorRoutes = require("./doctor.routes");
const HospitalRoutes = require("./hospital.routes");
const ImgRoutes = require("./img.routes");
const LoginRoutes = require("./login.routes");
const SearchRoutes = require("./search.routes");
const UploadRoutes = require("./upload.routes");
const UserRoutes = require("./user.routes");


function routerApi(app) {
  const router = Router();
  app.use("/api", router);
  router.use("/doctor", DoctorRoutes);
  router.use("/img", ImgRoutes);
  router.use("/hospital", HospitalRoutes);
  router.use("/login", LoginRoutes);
  router.use("/search", SearchRoutes);
  router.use("/upload", UploadRoutes);
  router.use("/users", UserRoutes);
}


module.exports = routerApi;
