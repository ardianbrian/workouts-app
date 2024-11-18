import mongoose from "mongoose";
import WorkoutModel from "../models/workout.model.js";

export const validateWorkoutId = (req, res, next) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({
      error: "Invalid workout id",
    });
  }
  next();
};

// Get All Workouts
export const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await WorkoutModel.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch workouts" });
  }
};

// Get Single Workouts
export const getWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await WorkoutModel.findById(id);
    if (!workout) {
      res.status(404).json({
        error: "Workout not found",
      });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      error: "Failed to fetch workout",
    });
  }
};

// Create Workouts
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await WorkoutModel.create({ title, load, reps });
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({
      error: "Failed to create workout",
    });
  }
};

// Patch Workout
export const updateWorkout = async (req, res) => {
  const { id } = req.params;
  const { error } = workoutSchema.validate(req.body, { allowUnknown: true });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const workout = await WorkoutModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }
    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ error: "Failed to update workout" });
  }
};

// Delete Workout
export const deleteWorkout = async (req, res) => {
  const { id } = req.params;
  try {
    const workout = await WorkoutModel.findByIdAndDelete(id);

    if (!workout) {
      res.status(404).json({
        error: error.message,
      });
    }

    res.status(200).json({
      message: "Workout deleted successfully",
      workout,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete workout",
    });
  }
};
