import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import { Route, Routes } from "react-router-dom";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="app">
      <h1 className="heading">My Todo List</h1>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTask />
              <TaskList />
            </>
          }
        />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;

/*
import React, { Component } from "react";
import Counter from "./components/Counter";


class App extends Component {
  constructor() {
    super()
    console.log("constructor app")
    this.state = { timerApp: 0, show: false ,time:new Date()}
  }

  componentDidMount() {
    console.log("component App mounted")
    setInterval(() => {
      this.setState({ timerApp: this.state.timerApp + 1 });
      this.setState({ time: new Date()});

    }, 1000);
  }

  toggle = () => {
    this.setState({ show: !this.state.show })
  }

  render() {
    console.log("first render")
    return (
      <div>
        <button onClick={this.toggle}>{this.state.show ? "hide" : "show"}</button>
        {this.state.show ? <Counter /> : null}
        <h1>TimerApp:{this.state.timerApp}</h1>
        <h1>Timer:{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default App;

*/
