const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
  string: {
    type: String,
    trim: true,
    required: "String is Required"
  },

  number: {
    type: Number,
    unique: true,
    required: true
  },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  boolean: Boolean,

  array: Array,

  date: {
    type: Date,
    default: Date.now
  },

  toJson: {
     virtuals: true
  //   validate: [({ length }) => length >= 6, "Longstring should be longer."]

    WorkoutSchema.virtual("totalDuration").get(function);
    return this.exercises.reduce((total, exercise));
    return total + exercise.duration;
  }
});

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;