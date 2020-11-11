const router = require("express").Router();
const path = require("path");

// // getting startup page
// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// calling the exercise input page
router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});

// getting dashboard with  stats
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

module.exports = router;
