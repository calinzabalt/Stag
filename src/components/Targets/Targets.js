import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addTarget,
  deleteTarget,
  clearTargets
} from "../../redux/actions/targets";
import moment from "moment";
import "./Targets.css";

class Targets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      dueDate: ""
    };
  }

  addTarget() {
    console.log("this.state.dueDate", this.state.dueDate);
    this.props.addTarget(this.state.text, this.state.dueDate);
  }

  deleteTarget(id) {
    this.props.deleteTarget(id);
  }

  renderTargets() {
    const { targets } = this.props;
    return (
      <ul className="list-group">
        {targets.map(target => {
          return (
            <li key={target.id} className="list-group-item">
              <div className="list-item">
                <div>{target.text}</div>
                <div>
                  <em>{moment(new Date(target.dueDate)).fromNow()}</em>
                </div>
              </div>
              <div
                className="list-item delete-button"
                onClick={() => this.deleteTarget(target.id)}
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
      <div className="Targets">
        <div className="form-inline reminder-form">
          <div className="title">Add Targets</div>
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
            type="button"
            className="btn btn-success"
            onClick={() => this.addTarget()}
          >
            Add Target
          </button>
        </div>
        {this.renderTargets()}
        <br />
        <button
          className="btn btn-danger"
          onClick={() => this.props.clearTargets()}
        >
          Clear Targets
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state", state);
  return {
    targets: state
  };
}

export default connect(mapStateToProps, {
  addTarget,
  deleteTarget,
  clearTargets
})(Targets);
