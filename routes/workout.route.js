import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getWorkout,
  updateWorkout,
  validateWorkoutId,
} from "../controllers/workout.controller.js";

const workoutRouter = express.Router();

workoutRouter.get("/", getAllWorkouts);
workoutRouter.get("/:id", validateWorkoutId, getWorkout);
workoutRouter.post("/", createWorkout);
workoutRouter.patch("/:id", validateWorkoutId, updateWorkout);
workoutRouter.delete("/:id", validateWorkoutId, deleteWorkout);

export default workoutRouter;
