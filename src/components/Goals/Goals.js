import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addReminder,
  deleteReminder,
  clearReminders
} from "../../redux/actions/goals";
import moment from "moment";
import "./Goals.css";

class Goals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: ""
    };
  }

  addReminder() {
    console.log("this.state.dueDate", this.state.dueDate);
    this.props.addReminder(this.state.text, this.state.dueDate);
  }

  deleteReminder(id) {
    this.props.deleteReminder(id);
  }

  renderReminders() {
    const { reminders } = this.props;
    return (
      <ul className="list-group">
        {reminders.map(reminder => {
          return (
            <li
              style={{ backgroundColor: "#039be5" }}
              key={reminder.id}
              className="list-group-item"
            >
              <div className="list-item">
                <div>{reminder.text}</div>
                <div>
                  <em>{moment(new Date(reminder.dueDate)).fromNow()}</em>
                </div>
              </div>
              <div
                className="list-item delete-button"
                onClick={() => this.deleteReminder(reminder.id)}
              >
                &#x2715;
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="Goals">
        <div className="form-inline reminder-form">
          <div className="title">Add Goals</div>
          <div className="form-group">
            <input
              className="form-control col-sm-6"
              placeholder="Add Target..."
              onChange={event => this.setState({ text: event.target.value })}
            />

            <input
              className="form-control col-sm-6"
              type="datetime-local"
              onChange={event => this.setState({ dueDate: event.target.value })}
            ></input>
          </div>

          <button
            style={{ backgroundColor: "#039be5" }}
            type="button"
            className="btn btn-primary"
            onClick={() => this.addReminder()}
          >
            Add Goal
          </button>
        </div>
        {this.renderReminders()}
        <br />
        <button
          className="btn btn-danger"
          onClick={() => this.props.clearReminders()}
        >
          Clear Goals
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    reminders: state
  };
}

export default connect(mapStateToProps, {
  addReminder,
  deleteReminder,
  clearReminders
})(Goals);
