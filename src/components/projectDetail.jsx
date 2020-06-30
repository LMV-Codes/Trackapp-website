import React, { Component } from "react";
import axiosApi from "../services/axiosApi";

class ProjectDetail extends Component {
  state = {
    issues: [],
    title: "",
    description: "",
  };
  async componentDidMount() {
    const { data: issues } = await axiosApi.get(
      `/api/bugtracker/${this.props.match.params.id}`
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
      await axiosApi.post("/api/bugtracker/create/", {
        project: this.props.match.params.id,
        title: this.state.title,
        description: this.state.description,
      });
    } catch (errors) {
      console.log(errors);
    }
  };

  render() {
    return (
      <div>
        <div>
          {this.props.match.params.id}
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
              <input
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
        {this.state.issues.map((issue) => (
          <div key={issue.id}>
            <p>{issue.title}</p>
            <p>{issue.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ProjectDetail;
