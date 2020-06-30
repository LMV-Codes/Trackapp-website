import React, { Component } from "react";
import axiosApi from "../services/axiosApi";

class ReportIssue extends Component {
  state = {
    title: "",
    description: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    try {
      const response = axiosApi.post("/api/bugtracker/issues/", {
        title: this.state.title,
        description: this.state.description,
      });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">Title:</label>
            <input
              className="form-control"
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title"
            />
          </div>
          <div className="form-group">
            <label htmlFor="">Description:</label>
            <input
              className="form-control"
              name="title"
              type="text"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Title"
            />
          </div>
          <input type="submit" value="Submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default ReportIssue;
