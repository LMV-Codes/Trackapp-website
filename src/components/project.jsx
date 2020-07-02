import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faSearch } from "@fortawesome/free-solid-svg-icons";

const Project = (props) => {
  return (
    <div>
      {props.projects.map((project) => (
        <div className="container-fluid project" key={project.id}>
          <div className="row">
            <div className="col-7 col-sm-8 vertical-center">
              <Link className="projectlink" to={`/project/${project.id}`}>
                <h2 className="fontw">{project.project_name}</h2>
              </Link>
            </div>
            <div className="col-1 col-sm-4 vertical-center-justify-end">
              <Link
                to={`/project/${project.id}`}
                className="btn btn-info btn-sm align-middle reducemargin"
              >
                <FontAwesomeIcon icon={faSearch} size="2x" />
              </Link>
              <button
                onClick={() => props.onDelete(project)}
                className="btn btn-danger btn-sm align-middle deletemargin"
              >
                <FontAwesomeIcon icon={faTrash} size="2x" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
