const app = require("express");
//connection to models
const db = require("../models");
const router = require("express").Router();
//lastest workout data
router.get("/", (req, res))
app.get("/api/workout",(req,res)=>{
db.Workout.find({}).sort({ day: -1})
    .then(dbWorkout =>{
     res.json(dbWorkout);
    })
    .catch(err =>{
      res.json(err);
    });
});
//adding excercises
app.put("api/workouts/:id", (req, res) =>{
let urlData = req.params;
let workoutData = req.body;

db.Workout.updateOne({_id: urlData.id},{
$push:{
  exercises:[
    {
     "type": workoutData.type,
     "name": workoutData.name,
     "duration": workoutData.duration,
     "distance": workoutData.distance,
     "weight": workoutData.weight,
     "reps": workoutData.reps,
     "sets": workoutData.sets
    }

  ]
}

})

  
})