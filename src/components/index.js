import { useState } from "react"; 

import Form from "./Form";
import Footer from "./Footer";
import Todos from "./Todos";

function Components() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

 
  const [hide, setHide] = useState("All");

  return (
    <div className="todoapp">
      <Form todos={todos} setTodos={setTodos} />{" "}
      <Todos todos={todos} setTodos={setTodos} hide={hide} />{" "}
      <Footer todos={todos} setTodos={setTodos} setHide={setHide} />{" "}
    </div>
  );
}

export default Components;