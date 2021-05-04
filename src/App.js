import './App.css';
import React, { useState, useEffect } from 'react';
import NavigationBar from './Components/NavigationBar';
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodo";
import Footer from "./Components/Footer";
import About from "./Components/About"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  const onDelete = (todo) => {
    console.log("deleted", todo);
    setTodos(todos.filter((e) => {
      return e !== todo
    }));
    localStorage.setItem('todos', JSON.stringify(todos));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Router>
        <NavigationBar title="Todo List" />

        <Switch>
          <Route exact path="/" render={() => {
            return (
              <>
                <AddTodo addTodo={(title, desc) => {
                  let no = todos.length > 0 ? todos[todos.length - 1].no + 1 : 1;
                  let newTodo = { no: no, title: title, desc: desc };
                  setTodos([...todos, newTodo]);
                }} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        
        <Footer />
      </Router>
    </>
  );
}

export default App;
