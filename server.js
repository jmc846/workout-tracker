// const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseUrl = "workout";
const collections = ["exercises"];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.on("error", error => {
  console.log("Database Error:", error);
});

app.post("/submit", ({ body }, res) => {
  const exercise = body;

  exercise.complete = false;

  db.exercises.save(exercise, (error, saved) => {
    if (error) {
      console.log(error);
    } else {
      res.send(saved);
    }
  });
});

app.get("/complete", (req, res) => {
  db.exercises.find({ complete: true }, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.get("/incomplete", (req, res) => {
  db.exercises.find({ complete: false }, (error, found) => {
    if (error) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.put("/markcomplete/:id", ({ params }, res) => {
  db.exercises.update(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $set: {
        complete: true
      }
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

app.put("/markincomplete/:id", ({ params }, res) => {
  db.exercises.update(
    {
      _id: mongojs.ObjectId(params.id)
    },
    {
      $set: {
        complete: false
      }
    },

    (error, edited) => {
      if (error) {
        console.log(error);
        res.send(error);
      } else {
        console.log(edited);
        res.send(edited);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
