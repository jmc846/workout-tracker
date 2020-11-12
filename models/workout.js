const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// setting schema for our workout database
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Must enter an exercise type"
        },
        name: {
          type: String,
          trim: true,
          required: "Must enter an exercise name"
        },
        duration: {
          type: Number,
          required: "Must enter duration"
        },

        distance: {
          type: Number
        },
        // required defines necessary fields for diffrent type of workouts

        weight: {
          type: Number
        },
        sets: {
          type: Number
        },
        reps: {
          type: Number
        },
      },
    ],
  },
  { toJSON: { virtuals: true } }
);

// setting virtual attribute of the workout duration
workoutSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});
// exporting model
const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
