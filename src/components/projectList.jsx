import React, { Component } from "react";
import axiosApi from "../services/axiosApi";
import { Link } from "react-router-dom";
import Project from "./project";

class Projects extends Component {
  state = {
    projects: [],
  };
  async componentDidMount() {
    const { data: projects } = await axiosApi.get("/api/bugtracker/");
    this.setState({ projects });
    console.log(projects);
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
        <Project
          projects={this.state.projects}
          onDelete={this.handleDelete}
          date={this.handleDate}
        />
      </div>
    );
  }
}

export default Projects;
