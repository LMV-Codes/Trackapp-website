import React, { Component } from "react";
import axiosApi from "./../services/axiosApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { Redirect } from "react-router-dom";
import auth from "../services/auth";

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
      axiosApi.post("api/user/create/", {
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
      });
      window.location = "/login";
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    if (auth.isLoggedIn()) return <Redirect to="/" />;
    return (
      <div className="register text-center">
        <FontAwesomeIcon icon={faAddressCard} size="5x" color="#5bc0de" />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">
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
            <label htmlFor="">
              <p className="white-font">Name</p>
            </label>
            <input
              className="form-control"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder="Type your name"
            />
            <label htmlFor="">
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

export default Register;
