import React, { Component } from 'react';
import ToDoList from './ToDoList.js'
import logo from './assets/images/logo.svg';
import './css/components/App.css';

class App extends Component {
  render() {
    return (
      <main className="App row">
        <div className="column">
          <ToDoList />
        </div>
      </main>
    );
  }
}

export default App;
