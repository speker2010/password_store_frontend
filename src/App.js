import React, { Component } from 'react';
import './App.css';
import LoginPage from "./components/LoginPage";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import ProjectsListPage from "./components/ProjectsListPage";
import ProjectEditPage from "./components/ProjectEditPage";
import UserConfigPage from "./components/UserConfigPage";
import UsersNGroupsPage from "./components/UsersNGroupsPage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: true
    }
  }

  render() {
    return (
      <Router>
        <div className='main'>
          <header className='container'>
            <nav>
              <ul>
                <li>
                  <Link to="/projects">
                    Проекты
                  </Link>
                </li>
                <li>
                  <Link to="/users-groups">
                    Пользователи и группы
                  </Link>
                </li>
              </ul>
            </nav>
            <nav>
              <ul>
                <li>
                  <Link to="/user">Пользователь</Link>
                </li>
              </ul>
            </nav>
          </header>
          {this.state.isAuth ?
            <div className="App">
              <Route exact path="/projects" component={ProjectsListPage}/>
              <Route path="/project/:id" component={ProjectEditPage}/>
              <Route path="/user" component={UserConfigPage}/>
              <Route path="/users-groups" component={UsersNGroupsPage}/>
            </div>
            :
            <LoginPage/>
          }
        </div>
      </Router>
    );
  }
}

export default App;
