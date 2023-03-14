import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../../store/actions";

const TodoList = ({ todos, onDelete }) => (
  <div className="container">
    {todos.map((todo, index) => {
      return (
        <div className="card" key={todo.id}>
          <div className="header">
            <div className="title">
              <h3 className="">Card {index + 1}</h3>
              <p>{todo.time}</p>
            </div>
            <button className="delete" onClick={(e) => onDelete(e, todo.id)}>
              X
            </button>
          </div>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="info">
            <p>{todo.text}</p>
          </div>
        </div>
      );
    })}
  </div>
);

const AddTodo = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form className="input-outer" onSubmit={handleSubmit}>
      <div className=" inputGroup">
        <input
          required
          placeholder="Enter TODO"
          name="todo"
          id="todo"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          autoComplete="off"
        />
        <label htmlFor="todo">ENTER TODO</label>
        <button type="submit" className="">
          ADD TODO
        </button>
      </div>
    </form>
  );
};

const IndexPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
  };

  const handleDeleteTodo = (e, id) => {
    e.stopPropagation();
    dispatch(deleteTodo(id));
  };
  return (
    <div className="main">
      <AddTodo onSubmit={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default IndexPage;
