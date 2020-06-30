import React, { Component } from "react";
import axiosApi from "./../services/axiosApi";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosApi.post("/api/user/token/", {
        email: this.state.email,
        password: this.state.password,
      });
      localStorage.setItem("Token", response.data.token);
      console.log(response);
      return response;
    } catch (error) {
      throw error;
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    if (localStorage.getItem("Token") === true) return <Redirect to="/" />;
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

export default Login;
