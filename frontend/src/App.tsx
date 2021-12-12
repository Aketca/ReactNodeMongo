import React, {useState, useEffect} from "react";
import axios from "axios";
import "./styles/App.scss";
import AddTodo from "./components/AddTodo";
// import TodoList from "./components/TodoList";
import { Link } from "react-router-dom";


const App = () => {
  const [todos, setTodos]: Array<any> = useState([]);

  useEffect(()=>{
    axios
      .get("/api")
      .then((response: any) => {
        setTodos(response.data.data);
      })
      .catch((e: Object) => console.log("Error : ", e));
  }, []);

  const handleAddTodo = (value : any) => {
    axios
      .post("/api/todos", { text: value })
      .then(() => {
        setTodos([...todos, { text: value }]);
      })
      .catch((e : null | {}) => console.log("Error : ", e));
  };
  return (
    <div className="App container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-8 offset-md-2">
            <nav>
              <Link to="/page1">Page1</Link>
              <Link to="/page2">Page2</Link>
            </nav>
            <h1>Todos</h1>
            <div className="todo-app">
              <AddTodo handleAddTodo={handleAddTodo} />
              {/* <TodoList todos={todos} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default  App;
