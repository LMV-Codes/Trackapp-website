import React, { Component } from "react";
import axiosApi from "./../services/axiosApi";

class CreateProject extends Component {
  state = {
    project_name: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    try {
      const response = axiosApi.post("/api/bugtracker/", {
        project_name: this.state.project_name,
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
            <label htmlFor="">Project Name:</label>
            <input
              className="form-control"
              name="project_name"
              type="text"
              value={this.state.project_name}
              onChange={this.handleChange}
              placeholder="Type your project name"
            />
          </div>
          <input type="submit" value="Submit" className="btn btn-success" />
        </form>
      </div>
    );
  }
}

export default CreateProject;
