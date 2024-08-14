import { Todo } from "@/types/types";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

function TodoModal({
  handleAddTodo,
  setModalOpen,
}: {
  handleAddTodo: (todo: string) => void;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [todo, setTodo] = useState<string>("");
  return (
    <div className="flex flex-col items-center gap-y-3 relative p-2">
      <div className="absolute -top-4 right-4">
        <button
          className="bg-cyan-500 rounded-full p-1 text-lg"
          onClick={() => {
            setModalOpen(false);
          }}
        >
          <IoMdClose />
        </button>
      </div>
      <input
        type="text"
        className="rounded p-2 text-black w-full md:w-72 mt-6"
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <div>
        <Button
          name="Submit"
          onClick={() => {
            handleAddTodo(todo);
          }}
        />
      </div>
    </div>
  );
}
export default TodoModal;
