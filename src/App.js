import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (!newTodo) {
      return;
    }

    const newId = Date.now().toString();
    const newTodoItem = {
      id: newId,
      content: newTodo,
    };

    setTodoList([...todoList, newTodoItem]);
    setNewTodo("");
  };

  const handleDeleteTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Enter new todo"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <div className="todo-list">
        {todoList.map((todo) => (
          <div key={todo.id} className="todo-item">
            <span>{todo.content}</span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
