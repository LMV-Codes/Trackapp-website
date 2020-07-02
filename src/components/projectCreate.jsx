import React, { Component } from "react";
import axiosApi from "./../services/axiosApi";
import auth from "../services/auth";
import { Redirect } from "react-router-dom";

class CreateProject extends Component {
  state = {
    project_name: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    try {
      axiosApi.post("/api/bugtracker/", {
        project_name: this.state.project_name,
      });
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div className="create-project text-center">
        {auth.isLoggedIn() ? (
          <form onSubmit={this.handleSubmit} className="w-100">
            <div className="form-group">
              <label htmlFor="">Project Name</label>
              <input
                className="form-control "
                name="project_name"
                type="text"
                value={this.state.project_name}
                onChange={this.handleChange}
                placeholder="Type your project name"
              />
            </div>
            <input type="submit" value="Submit" className="btn btn-info" />
          </form>
        ) : (
          <Redirect to="/login/" />
        )}
      </div>
    );
  }
}

export default CreateProject;
