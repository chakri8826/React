import { Component } from "react";
import Clock from "./components/Clock";

import "./App.css";

class App extends Component {

  state = { showClock: false };
  onToggleClock = ()=>{
    this.setState(prevState=>({
      showClock:!prevState.showClock
    }))
  }
  render() {
    const { showClock } = this.state;
    return (
      <div className="app-container">
        <button
          onClick={this.onToggleClock}
          type="button"
          className="toggle-button"
        >
          {showClock ? "Hide Clock" : "Show Clock"}
        </button>
        {showClock && <Clock />}
      </div>
    );
  }
}

export default App;
