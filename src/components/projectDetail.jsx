import React, { Component } from "react";
import axiosApi from "../services/axiosApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faBan } from "@fortawesome/free-solid-svg-icons";

class ProjectDetail extends Component {
  state = {
    issues: [],
    title: "",
    description: "",
    postIssue: [],
  };

  handleGet = async () => {
    try {
      const { data: issues } = await axiosApi.get(
        `/api/bugtracker/${this.props.match.params.id}/`
      );
      this.setState({ issues: issues.issue });
    } catch (errors) {
      console.log(errors);
    }
  };

  async componentDidMount() {
    const { data: issues } = await axiosApi.get(
      `/api/bugtracker/${this.props.match.params.id}/`
    );
    this.setState({ issues: issues.issue });
    console.log(issues);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  postIssue = async (event) => {
    event.preventDefault();
    try {
      await axiosApi.post("/api/bugtracker/issues/", {
        project: this.props.match.params.id,
        title: this.state.title,
        description: this.state.description,
      });
      this.handleGet();
    } catch (errors) {
      console.log(errors);
    }
  };

  handleSolved = async (issue) => {
    try {
      await axiosApi.patch(`/api/bugtracker/issues/${issue.id}/`, {
        resolved: "True",
      });
      this.handleGet();
    } catch (errors) {
      console.log(errors);
    }
  };

  render() {
    return (
      <div>
        {this.state.issues.map((issue) => (
          <div className="row">
            <div className="col-11 remove-padding-right">
              <div className="issue fontw" key={issue.id}>
                <h2>{issue.title}</h2>
                <p>{issue.description}</p>
                {issue.resolved ? null : (
                  <button
                    onClick={() => this.handleSolved(issue)}
                    className="btn btn-sm btn-info"
                  >
                    Mark Solved
                  </button>
                )}
              </div>
            </div>
            <div
              className={
                issue.resolved
                  ? "col-1 vertical-center-justify-center issue-solved"
                  : "col-1 vertical-center-justify-center issue-unsolved"
              }
            >
              <h3>
                {issue.resolved ? (
                  <FontAwesomeIcon icon={faCheck} />
                ) : (
                  <FontAwesomeIcon icon={faBan} />
                )}
              </h3>
            </div>
          </div>
        ))}
        <div className="project fontw">
          <h3>Submit Issue</h3>
          <form onSubmit={this.postIssue}>
            <div className="form-group">
              <label htmlFor="">Title:</label>
              <input
                className="form-control"
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleChange}
                placeholder="Issue title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="">Description:</label>
              <textarea
                className="form-control"
                name="description"
                type="text"
                value={this.state.description}
                onChange={this.handleChange}
                placeholder="Issue description"
              />
            </div>
            <input type="submit" value="Submit" className="btn btn-success" />
          </form>
        </div>
      </div>
    );
  }
}

export default ProjectDetail;
