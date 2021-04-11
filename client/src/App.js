import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateTodo from './components/create';
import EditTodo from './components/update';
import TodosList from './components/list';

import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-lg">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <img src={logo} width="30" height="30" alt="logo" />

            <Link to="/" className="navbar-brand">
              Todo App
            </Link>
            <div className="collpase nav-collapse ml-auto ">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link text-warning">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/add" className="nav-link text-warning">
                    Create Todo
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Route path="/" exact component={TodosList} />
          <Route path="/update/:id" component={EditTodo} />
          <Route path="/add" component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
