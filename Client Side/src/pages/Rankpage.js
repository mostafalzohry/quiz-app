import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const RankResult = () => {

  const location = useLocation();
  const navigate = useNavigate();
  let score = location.state.score;


  ////// back to the home page and try the quiz again 

  const handleClick = () => {
    navigate("/");
    window.location.reload();
  };

  const [rank, Setrank] = useState();
    
  //// send the score to backend and rececive the rank

  useEffect(() => {
    axios
      .post("http://localhost:8800/server/rank", { score: score })

      .then((res) => {
        Setrank(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [score]);



  return (
    <div className="container">
      {/* <div className="rankResult">this is your score : {score}</div> */}
      <div className="rankResult">this is your rank : {Math.floor(rank)}</div>
      
    
        <button className="btn btn-refresh" onClick={handleClick}>
          try again
        </button>
      </div>
  );
};

export default RankResult;
