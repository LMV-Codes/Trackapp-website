import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/navbar";
import Register from "./components/register";
import Login from "./components/login";
import Projects from "./components/projectList";
import CreateProject from "./components/projectCreate";
import ProjectDetail from "./components/projectDetail";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path={"/project/:id"} component={ProjectDetail} />
            <Route exact path={"/createproject/"} component={CreateProject} />
            <Route exact path={"/register/"} component={Register} />
            <Route exact path={"/login/"} component={Login} />
            <Route exact path={"/"} component={Projects} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
