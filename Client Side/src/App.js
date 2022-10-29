import RankResult from "../src/pages/Rankpage";
import WordDisplay from "../src/pages/Wordpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  ////////// get the data from backend
  useEffect(() => {
    axios
      .get("http://localhost:8800/server/words")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={data && <WordDisplay finalData={data} />} />
          <Route path="/rank" element={<RankResult />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
