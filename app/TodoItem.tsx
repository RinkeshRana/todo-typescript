import { Todo } from "@/types/types";
import { FaRegTrashAlt } from "react-icons/fa";

type TodoItem = Todo & {
  handleRemoveTodo: (id: number) => void;
  handleTodoComplete: (id: number) => void;
};

function TodoItem({
  isCompleted,
  name,
  id,
  handleRemoveTodo,
  handleTodoComplete,
}: TodoItem) {
  return (
    <div className="flex justify-between items-center px-7">
      <input
        type="checkbox"
        className="m-2"
        checked={isCompleted}
        onChange={() => {
          handleTodoComplete(id);
        }}
      />
      <p
        className={`m-2 text-md sm:text-lg text-center ${
          isCompleted && "line-through"
        }`}
      >
        {name}
      </p>
      <button
        onClick={() => {
          handleRemoveTodo(id);
        }}
      >
        <FaRegTrashAlt className="m-2" />
      </button>
    </div>
  );
}
export default TodoItem;
