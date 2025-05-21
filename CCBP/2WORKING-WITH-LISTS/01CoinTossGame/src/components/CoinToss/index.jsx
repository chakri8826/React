import { Component } from "react";
import "./index.css";
class CoinToss extends Component {
  state = {
    currImg: "https://assets.ccbp.in/frontend/react-js/heads-img.png",
    noOfHeads: 0,
    noOfTails: 0,
  };
  updateCoins=()=>{
    const tossResult = Math.floor(Math.random() *2)
    if(tossResult==0){
        this.setState(prevState=>({
            currImg: "https://assets.ccbp.in/frontend/react-js/heads-img.png",
            noOfHeads:prevState.noOfHeads+1,
        }))
    }
    else{
        this.setState((prevState) => ({
            currImg: "https://assets.ccbp.in/frontend/react-js/tails-img.png",
            noOfTails: prevState.noOfTails + 1,
        }));
    }
  }
  render() {
    const { currImg, noOfTails, noOfHeads } = this.state;
    return (
      <div className="bg-cont">
        <div className="inner-cont">
          <h1>Coin Toss Game</h1>
          <h2>Heads (0r) Tails</h2>
          <img src={currImg} className="img" alt="toss result" />
          <button onClick={this.updateCoins}>Toss Coin</button>
          <div className="counts">
            <p>Total: {noOfHeads + noOfTails} </p>
            <p>Heads: {noOfHeads} </p>
            <p>Tails: {noOfTails} </p>
          </div>
        </div>
      </div>
    );
  }
}
export default CoinToss;
