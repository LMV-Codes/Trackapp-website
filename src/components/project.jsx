import React, { Component } from "react";
import { Link } from "react-router-dom";

const Project = (props) => {
  return (
    <div>
      {props.projects.map((project) => (
        <div className="project" key={project.id}>
          <div className="row">
            <div className="col-5 vertical-center">
              <Link to={`/project/${project.id}`}>
                <h2 className="fontw">Project:{project.project_name}</h2>
              </Link>
            </div>
            <div className="col-5">
              <p className="d-flex justify-content-end fontw">{project.name}</p>
              <p className="d-flex justify-content-end fontw">
                {props.date(project)}
              </p>
            </div>
            <div className="col-2 vertical-center">
              <button
                onClick={() => props.onDelete(project)}
                className="btn btn-danger align-middle"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
