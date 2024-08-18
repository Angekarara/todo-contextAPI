import { useTodoContext } from "../providers/TodoProvider"

const TodoList = () => {
    const { todoList } = useTodoContext();
  return (
    <ul>
{todoList.map((todo, index) => (
    <li key={index}>{todo}</li>
))}
        
    </ul>
  )
}

export default TodoList