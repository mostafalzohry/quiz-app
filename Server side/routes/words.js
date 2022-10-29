const rout = require("express").Router();
const data = require("../TestData.json");

rout.get("/", async (req, res) => {
  try {
    let words = data.wordList;
    // Shuffling the words

    function shuffle(array) {
      let currentIndex = array.length;
      // randomIndex;

      //  remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And change it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }

      return array;
    }


    ///////// should have verb and noun and advective and anvdverb
    const allPos = (p) => words.filter((word) => word.pos === p);
    const verbs = allPos("verb");
    const nouns = allPos("noun");
    const adverbs = allPos("adverb");
    const adjectivs = allPos("adjective");

    let randomWords = shuffle(words);
  

   

    let posGroups = [verbs, nouns, adverbs, adjectivs];
    let posIndex = 0;
    let count = 0;
    let result = [];

    while (count++ < 10) {
      let word = posGroups[posIndex].pop();
      if (word) result.push(word);
      posIndex = posIndex < posGroups.length - 1 ? posIndex + 1 : 0;
    }

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = rout;
