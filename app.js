import express from "express";
import url from "url";
import router from './src/router/indexrouter.js'
import connectDb from "./src/config/db.js";
import path from "node:path";
import bodyParser from "express";

// To make the __dirname thing work
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initializing the app with express
const app = express();

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static('public'))

// The router and the database connection and listener
app.use("/", router);
try{
  const port = process.env.PORT ;
  app.listen(port, () => {
    connectDb();

    console.log(`Server is running on ${port}`);
  });
}catch (err) {
  console.log(err,"Server could not start")
}