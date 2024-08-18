import { createContext, useContext, useState } from "react";

const TodoContext = createContext();
const initialState = ["first task"];

const TodoProvider = ({ childern }) => {
  const [todoList, setTodoList] = useState();

  const contextValue = {
    todoList,
  };
  return <TodoContext.Provider value={{}}>{childern}</TodoContext.Provider>;
};

export const useTodoContext = () => useContext(TodoContext);
export default TodoProvider;
