const rout = require("express").Router();
const data = require("../TestData.json");

rout.post("/", async (req, res) => {
  try {
    let list = data.scoresList;
    let score = req.body.score;


    // Check the number of scores below it
    let newList = 0;
    for (let i = 0; i < list.length; i++) {
      if (list[i] < score) {
        newList++;
      }
    }
    // Get the rank and send it back to the client side
    let rank = (newList / list.length) * 100;
    res.status(200).json(rank);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = rout;
