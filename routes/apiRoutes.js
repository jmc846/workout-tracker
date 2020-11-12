//connection to models
const router = require("express").Router();
const Workout = require("../models/workout.js");
//lastest workout data

router.get("/api/workouts", (req, res) => {
  Workout.find()
    // .sort({ day: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

//adding excercises
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

router.delete("/api/workouts", (req, res) => {
  let workoutid = req.body.id;
  Workout.findByIdAndDelete(workoutid)
    .then(() => {
      res.json(true);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) =>{
  Workout.find({}).limit(7)
  .then(dbWorkout => {
    res.json(dbWorkout);
  })
  .catch((err) => {
    res.json(err);
  });
})

module.exports = router;
