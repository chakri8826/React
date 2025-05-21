import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import AppointmentItem from "../AppointmentItem";
import "./index.css";

class Appointments extends Component {
  state = {
    appointmentsList: [],
    title: "",
    date: "",
    isStarredFilterActive: false,
  };

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  };

  onChangeDate = (event) => {
    this.setState({ date: event.target.value });
  };

  onClickAddAppointment = (event) => {
    event.preventDefault();
    const { title, date } = this.state;

    if (title !== "" && date !== "") {
      const formattedDate = format(new Date(date), "dd MMMM yyyy, EEEE");
      const newAppointment = {
        id: uuidv4(),
        title,
        date: formattedDate,
        isStarred: false,
      };

      this.setState((prevState) => ({
        appointmentsList: [...prevState.appointmentsList, newAppointment],
        title: "",
        date: "",
      }));
    }
  };

  toggleStar = (id) => {
    this.setState((prevState) => ({
      appointmentsList: prevState.appointmentsList.map((appointment) =>
        appointment.id === id
          ? { ...appointment, isStarred: !appointment.isStarred }
          : appointment
      ),
    }));
  };

  toggleStarredFilter = () => {
    this.setState((prevState) => ({
      isStarredFilterActive: !prevState.isStarredFilterActive,
    }));
  };

  getFilteredAppointments = () => {
    const { appointmentsList, isStarredFilterActive } = this.state;
    return isStarredFilterActive
      ? appointmentsList.filter((appointment) => appointment.isStarred)
      : appointmentsList;
  };

  render() {
    const { title, date, isStarredFilterActive } = this.state;
    const filteredAppointments = this.getFilteredAppointments();

    return (
      <div className="app-container">
        <div className="appointments-container">
          <h1 className="heading">Add Appointment</h1>
          <form className="form" onSubmit={this.onClickAddAppointment}>
            <input
              type="text"
              value={title}
              placeholder="Title"
              onChange={this.onChangeTitle}
            />
            <input type="date" value={date} onChange={this.onChangeDate} />
            <button type="submit">Add</button>
          </form>
          <hr />
          <div className="appointments-header">
            <h2>Appointments</h2>
            <button
              className={`filter-btn ${isStarredFilterActive ? "active" : ""}`}
              onClick={this.toggleStarredFilter}
            >
              Starred
            </button>
          </div>
          <ul className="appointments-list">
            {filteredAppointments.map((appointment) => (
              <AppointmentItem
                key={appointment.id}
                appointmentDetails={appointment}
                toggleStar={this.toggleStar}
              />
            ))} 
          </ul>
        </div>
      </div>
    );
  }
}

export default Appointments;
