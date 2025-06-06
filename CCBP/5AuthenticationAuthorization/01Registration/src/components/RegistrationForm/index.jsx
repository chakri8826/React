import { Component } from "react";
import "./index.css";

class RegistrationForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    firstNameError: false,
    lastNameError: false,
    isSubmitted: false,
  };

  onBlurFirstName = () => {
    const { firstName } = this.state;
    this.setState({ firstNameError: firstName.trim() === "" });
  };

  onBlurLastName = () => {
    const { lastName } = this.state;
    this.setState({ lastNameError: lastName.trim() === "" });
  };

  onChangeFirstName = (event) => {
    this.setState({ firstName: event.target.value });
  };

  onChangeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    const { firstName, lastName } = this.state;

    const isFirstNameValid = firstName.trim() !== "";
    const isLastNameValid = lastName.trim() !== "";

    if (isFirstNameValid && isLastNameValid) {
      this.setState({
        isSubmitted: true,
        firstNameError: false,
        lastNameError: false,
      });
    } else {
      this.setState({
        firstNameError: !isFirstNameValid,
        lastNameError: !isLastNameValid,
      });
    }
  };

  onClickSubmitAnother = () => {
    this.setState({
      isSubmitted: false,
      firstName: "",
      lastName: "",
    });
  };

  renderSuccessView = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p>Submitted Successfully</p>
      <button type="button" onClick={this.onClickSubmitAnother}>
        Submit Another Response
      </button>
    </div>
  );

  renderForm = () => {
    const { firstName, lastName, firstNameError, lastNameError } = this.state;

    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <div className="input-container">
          <label htmlFor="firstName">FIRST NAME</label>
          <input
            id="firstName"
            type="text"
            value={firstName}
            onChange={this.onChangeFirstName}
            onBlur={this.onBlurFirstName}
            className={firstNameError ? "input-error" : ""}
          />
          {firstNameError && <p className="error-message">Required</p>}
        </div>

        <div className="input-container">
          <label htmlFor="lastName">LAST NAME</label>
          <input
            id="lastName"
            type="text"
            value={lastName}
            onChange={this.onChangeLastName}
            onBlur={this.onBlurLastName}
            className={lastNameError ? "input-error" : ""}
          />
          {lastNameError && <p className="error-message">Required</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    );
  };

  render() {
    const { isSubmitted } = this.state;
    return (
      <div className="app-container">
        <h1>Registration</h1>
        {isSubmitted ? this.renderSuccessView() : this.renderForm()}
      </div>
    );
  }
}

export default RegistrationForm;
