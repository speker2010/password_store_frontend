import React, { Component } from 'react';
import './App.css';
import ProjectsListPage from "./components/ProjectsListPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectsListPage/>
      </div>
    );
  }
}

export default App;
