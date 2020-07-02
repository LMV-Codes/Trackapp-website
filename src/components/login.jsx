import React, { Component } from "react";
import axiosApi from "./../services/axiosApi";
import { Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
import auth from "../services/auth";

class Login extends Component {
  state = {
    email: "",
    password: "",
    errors: {},
    logged: false,
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosApi.post("/api/user/token/", {
        email: this.state.email,
        password: this.state.password,
      });
      localStorage.setItem("Token", response.data.token);
      window.location = "/";
    } catch (error) {
      throw error;
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    if (auth.isLoggedIn()) return <Redirect to="/" />;
    return (
      <div className="login text-center">
        <form onSubmit={this.handleSubmit}>
          <FontAwesomeIcon icon={faKey} size="5x" color="#5bc0de" />
          <div className="form-group">
            <label>
              <p className="white-font">Email</p>
            </label>
            <input
              className="form-control"
              name="email"
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="Type your email address"
            />
            <label>
              <p className="white-font">Password</p>
            </label>
            <input
              className="form-control"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              placeholder="Type your password"
            />
            <br />
            <input
              type="submit"
              value="Submit"
              className="btn btn-info btn-block"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
