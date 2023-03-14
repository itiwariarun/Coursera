import { v4 as uuidv4 } from "uuid";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: {
    id: uuidv4(),
    text,
    time: `${date}\n${time}`,
    completed: false,
  },
});
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: {
    id,
  },
});
