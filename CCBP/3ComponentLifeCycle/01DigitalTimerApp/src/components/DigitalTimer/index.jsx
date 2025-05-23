import { Component } from "react";
import "./index.css";

class DigitalTimer extends Component {
  state = {
    isStarted: false,
    timerLimitInMinutes: 25,
    timeElapsedInSeconds: 0,
  };

  getTime = () => {
    const { timeElapsedInSeconds, timerLimitInMinutes } = this.state;
    const timeLeft = timerLimitInMinutes * 60 - timeElapsedInSeconds;
    const mins = Math.floor(timeLeft / 60);
    const secs = Math.floor(timeLeft % 60);
    const minDis = mins > 9 ? mins : `0${mins}`;
    const secDis = secs > 9 ? secs : `0${secs}`;
    return `${minDis}:${secDis}`;
  };

  onClickUpdate = () => {
    const { isStarted, timeElapsedInSeconds, timerLimitInMinutes } = this.state;
    const isTimerCompleted = timeElapsedInSeconds === timerLimitInMinutes * 60;
    if (isTimerCompleted) {
      this.setState({ timeElapsedInSeconds: 0 });
    }
    if (isStarted) {
      clearInterval(this.timerId);
      this.getTime();
    } else {
      this.timerId = setInterval(this.tick, 1000);
    }
    this.setState((prevState) => ({
      isStarted: !prevState.isStarted,
    }));
  };

  tick = () => {
    const { timeElapsedInSeconds, timerLimitInMinutes } = this.state;
    const totalTime = timerLimitInMinutes * 60;
    if (timeElapsedInSeconds >= totalTime) {
      clearInterval(this.timerId);
      this.setState({ isStarted: false });
    } else {
      this.setState((prevState) => ({
        timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
      }));
    }
  };

  onClickReset = () => {
    clearInterval(this.timerId);
    this.setState({
      isStarted: false,
      timeElapsedInSeconds: 0,
      timerLimitInMinutes: 25,
    });
  };

  onDecreaseLimit = () => {
    const { isStarted, timerLimitInMinutes } = this.state;
    if (!isStarted && timerLimitInMinutes > 1) {
      this.setState((prevState) => ({
        timerLimitInMinutes: prevState.timerLimitInMinutes - 1,
      }));
    }
  };

  onIncreaseLimit = () => {
    const { isStarted } = this.state;
    if (!isStarted) {
      this.setState((prevState) => ({
        timerLimitInMinutes: prevState.timerLimitInMinutes + 1,
      }));
    }
  };

  render() {
    const { isStarted, timerLimitInMinutes } = this.state;

    const startPauseIcon = isStarted
      ? "https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
      : "https://assets.ccbp.in/frontend/react-js/play-icon-img.png";
    const startPauseAlt = isStarted ? "pause icon" : "play icon";
    const startPauseText = isStarted ? "Pause" : "Start";

    return (
      <div className="digital-timer-bg">
        <div className="timer-container">
          <div className="time-display-container">
            <h1 className="timer-value">{this.getTime()}</h1>
            <p className="timer-status">{isStarted ? "Running" : "Paused"}</p>
          </div>

          <div className="controls-container">
            <div className="control-buttons">
              <button className="control-button" onClick={this.onClickUpdate}>
                <img
                  src={startPauseIcon}
                  alt={startPauseAlt}
                  className="control-icon"
                />
                <p className="control-label">{startPauseText}</p>
              </button>

              <button className="control-button" onClick={this.onClickReset}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                  className="control-icon"
                />
                <p className="control-label">Reset</p>
              </button>
            </div>

            <div className="timer-limit-control">
              <p className="control-label">Set Timer limit</p>
              <div className="limit-controls">
                <button className="limit-button" onClick={this.onDecreaseLimit}>
                  -
                </button>
                <p className="timer-limit">{timerLimitInMinutes}</p>
                <button className="limit-button" onClick={this.onIncreaseLimit}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DigitalTimer;
