import express from "express";
import "dotenv/config.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
// environment variables
const PORT = process.env.PORT || 4005;
const MONGO_URL = process.env.MONGO_URL;

// middlewares
app.use(cors()); // to allow request from any origin
app.use(express.json()); // to parse JSON data

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("[MONGO_DB] Connected successfully!"))
  .catch((error) =>
    console.error(`[MONGO_DB] Connecting failed! ERROR:`, error)
  );

// import routes
import jobsRoutes from "./routes/jobsRoutes.js";

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello world from Server!" });
});
app.use("/api/jobs", jobsRoutes);
app.listen(PORT, () => {
  console.log(`[SERVER] Listening to PORT ${PORT}`);
});
