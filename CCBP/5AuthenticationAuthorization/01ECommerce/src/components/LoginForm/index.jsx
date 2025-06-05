import { Component } from "react";
import axios from "axios";

import "./index.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  renderPasswordField = () => {
    const { password } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    );
  };

  renderUsernameField = () => {
    const { username } = this.state;
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-filed"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    );
  };

  onSubmitSuccess = () => {
    const { history } = this.props;
    history.replace("/");
  };
  submitForm = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.ok === true) {
      this.onSubmitSuccess();
    }
  };
  
  // CCBP DOES NOT HAVE app.use(cors()) in their backend so it doesn't work here
  // submitForm = async (e) => {
  //   e.preventDefault();
  //   const { username, password } = this.state;
  //   const userDetails = { username, password };
  //   const url = "https://apis.ccbp.in/login";

  //   try {
  //     const response = await axios.post(url, userDetails);
  //     console.log("Full response:", response);
  //     const data = response.data;
  //     console.log("Data:", data);

  //     this.onSubmitSuccess(); // Call success handler
  //   } catch (error) {
  //     console.error("Login failed:", error.response?.data || error.message);
  //     // You can also show a toast here or update UI
  //   }
  // };

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
