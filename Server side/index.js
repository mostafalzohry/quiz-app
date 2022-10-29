const express = require("express");
const app = express();
const fs = require("fs").promises;
const wordsRoute = require("./routes/words");
const rankRoute = require("./routes/rank");
const cors = require('cors');


app.use(cors());

app.use(express.json());


/////// make the two routes to frontend 
app.use("/server/words", wordsRoute);
app.use("/server/rank", rankRoute);

// Start the backend server
app.listen(8800, () => {
  console.log("Backend server is running");
});
