import React, { Component } from 'react';
import '../App/App.css'
import TimerButton from '../TimerButton/TimerButton';
let myInterval: any
class Timer extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      minutes: 0,
      seconds: 0,
      isOn: false,
    };

    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  startTimer() {
    if (this.state.isOn) {
      return;
    }
    myInterval = setInterval(() => {
      const { seconds, minutes } = this.state;
      if (seconds > 0) {
        this.setState((props: Partial<any> = {}) => ({
          seconds: seconds + 1,
        }));
      }
      if (seconds === 0) {
        this.setState((props: Partial<any> = {}) => ({
          seconds: seconds + 1,
        }));
      }
      else if (seconds >= 59) {
        this.setState((props: Partial<any> = {}) => ({
          seconds: 0,
          minutes: minutes + 1
        }))
      }
    }, 1000);
    this.setState({ isOn: true });
  }
  stopTimer() {
    clearInterval(myInterval);
    this.setState({ isOn: false });
  }
  resetTimer() {
    this.stopTimer();
    this.setState({
      minutes: 0,
      seconds: 0,
    });
  }

  render = () => {
    const { minutes, seconds } = this.state;

    return (
      <div className="timer-container">
        <div className="time-display">
          {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </div>
        <div className="timer-button-container">
          <TimerButton
            buttonAction={this.startTimer}
            buttonValue={'Start'}
          />
          <TimerButton
            buttonAction={this.stopTimer}
            buttonValue={'Stop'}
          />

          <TimerButton
            buttonAction={this.resetTimer}
            buttonValue={'Reset'}
          />
        </div>
      </div>
    );
  };
}

export default Timer;