import { FaTrash } from "react-icons/fa";

const TodoForm = () => {
  return (
    <form>
      <input type="text" />
      <button>
        <FaTrash />
      </button>
    </form>
  );
};

export default TodoForm;
