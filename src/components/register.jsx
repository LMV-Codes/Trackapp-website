import React, { Component } from "react";
import axiosApi from "./../services/axiosApi";

class Register extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    errors: {},
  };

  handleSubmit = (event) => {
    event.preventDefault();
    try {
      const response = axiosApi.post("api/user/create/", {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
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
            <label htmlFor="">Email:</label>
            <input
              className="form-control"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Type your email address"
            />
            <label htmlFor="">Name:</label>
            <input
              className="form-control"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Type your name"
            />
            <label htmlFor="">Password:</label>
            <input
              className="form-control"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Type your password"
            />
            <input type="submit" value="Submit" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
