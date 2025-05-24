import { Component } from "react";
import './index.css'

class Stopwatch extends Component {
  state = {
    isStarted: false,
    timeElapsedSeconds: 0,
  };
  onClickUpdate = () => {
    const { isStarted } = this.state;
    if (!isStarted) {
      this.timerId = setInterval(() => {
        this.setState((prevState) => ({
          timeElapsedSeconds: prevState.timeElapsedSeconds + 1,
        }));
      }, 1000);
      this.setState({ isStarted: true });
    }
  };
  stopTimer = () => {
    clearInterval(this.timerId)
    this.setState({ isRunning: false });
  }
  resetTimer = () =>{
    clearInterval(this.timerId)
    this.setState({timeElapsedSeconds:0,isStarted:false })
  }
  formattedDate = () => {
    const { timeElapsedSeconds } = this.state;
    const mins = Math.floor(timeElapsedSeconds / 60);
    const secs = timeElapsedSeconds % 60;
    const formatMins = mins > 9 ? mins : `0${mins}`;
    const formatSecs = secs > 9 ? secs : `0${secs}`;
    return `${formatMins}:${formatSecs}`;
  };
  render() {
    const { date, isStarted } = this.state;
    return (
      <div className="stopwatch-bg">
        <div className="stopwatch-card">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-icon"
            />
            <br />
          </div>
          <p className="timer">{this.formattedDate()}</p>
          <div className="buttons-container">
            <button className="btn start" onClick={this.onClickUpdate}>
              Start
            </button>
            <button className="btn stop" onClick={this.stopTimer}>
              Stop
            </button>
            <button className="btn reset" onClick={this.resetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Stopwatch