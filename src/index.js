import express from "express";
import dotenv from "dotenv";
dotenv.config();
import workoutRouter from "../routes/workout.route.js";
import connectDB from "../config/mongodb.js";

const app = express();
app.use(express.json());

connectDB();

// route
app.use("/api/workouts", workoutRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
