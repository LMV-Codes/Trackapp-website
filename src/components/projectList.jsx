import React, { Component } from "react";
import axiosApi from "../services/axiosApi";
import { Link } from "react-router-dom";
import Project from "./project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import auth from "../services/auth";

class Projects extends Component {
  state = {
    projects: [],
  };
  async componentDidMount() {
    try {
      const { data: projects } = await axiosApi.get("/api/bugtracker/");
      this.setState({ projects });
      console.log(projects);
    } catch (errors) {
      console.log(errors);
    }
  }

  handleDate = (project) => {
    const date_raw = project.created_at;
    const date_formatted = date_raw.substring(0, 10);
    return date_formatted;
  };

  handleDelete = async (project) => {
    const baseProjects = this.state.projects;
    const projects = baseProjects.filter((p) => p.id !== project.id);
    this.setState({ projects });
    try {
      axiosApi.delete(`/api/bugtracker/${project.id}`);
    } catch (error) {
      if (error.response && error.response.status === 404)
        this.setState({ projects: baseProjects });
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        {auth.isLoggedIn() ? (
          <div>
            <Project
              projects={this.state.projects}
              onDelete={this.handleDelete}
              date={this.handleDate}
            />
            <div className="end-justify">
              <Link to="/createproject">
                <FontAwesomeIcon icon={faFolderPlus} size="3x" color="green" />
              </Link>
            </div>
          </div>
        ) : (
          <h1>Please signup or login to create and see projects</h1>
        )}
      </div>
    );
  }
}

export default Projects;
