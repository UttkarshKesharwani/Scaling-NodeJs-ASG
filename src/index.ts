import express from "express";
import cluster from "cluster";
import os from "os";
import {
  rootRoute,
  loginRoute,
  signupRoute,
  homeRoute,
} from "./Controller/normalController";

const totalCPUs = os.cpus().length;

const port = 3000;


if (cluster.isPrimary) {
  console.log(`Number of CPUs is ${totalCPUs}`);
  console.log(`Primary ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
  const app = express();
  console.log(`Worker ${process.pid} started`);

  app.get("/", rootRoute);
  app.get("/home", homeRoute);
  app.get("/login", loginRoute);
  app.get("/signup", signupRoute);

  app.get("/api/:n", function (req, res) {
    let n = parseInt(req.params.n);
    let count = 0;

    if (n > 5000000000) n = 5000000000;

    for (let i = 0; i <= n; i++) {
      count += i;
    }

    res.send(`Final count is ${count} ${process.pid}`);
  });

  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}



// import express from "express";
// import { homeRoute, signupRoute } from "./Controller/normalController";
// const app = express();

// app.get("/signup", signupRoute);
// app.get("/home", homeRoute);
// app.listen(3000);

