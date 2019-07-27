import "./db";
import app from "./app";
import dotenv from "dotenv";
import "./models/Comment";
import "./models/User";
import "./models/Video";
import "@babel/polyfill";

dotenv.config({ path: __dirname + "/.env" });

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅  Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
