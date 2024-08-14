"use client";
import { useState } from "react";
import TodoItem from "./TodoItem";
import { Todo } from "@/types/types";
import TodoModal from "./TodoModal";
import Button from "./Button";
import { log } from "console";

function HeaderBody() {
  const [todoItems, setTodoItems] = useState<Todo[]>([
    {
      name: "ths",
      isCompleted: true,
      id: Date.now(),
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);

  function handleAddTodo(todo: string) {
    console.log("add todo");

    if (!todo) return;
    setTodoItems([
      ...todoItems,
      { name: todo, isCompleted: false, id: Date.now() },
    ]);
    setModalOpen(!modalOpen);
  }

  function handleRemoveTodo(id: number) {
    setTodoItems(
      todoItems.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function handleTodoComplete(id: number) {
    setTodoItems(
      todoItems.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        }
        return item;
      })
    );
  }

  return (
    <div className="bg-zinc-900 mt-6 relative py-6 rounded-md ">
      {modalOpen && (
        <TodoModal handleAddTodo={handleAddTodo} setModalOpen={setModalOpen} />
      )}

      {!modalOpen && todoItems.length === 0 && (
        <div className="text-center  p-10">Add some Todos</div>
      )}
      {!modalOpen &&
        todoItems.map((item, index) => (
          <TodoItem
            isCompleted={item.isCompleted}
            key={item.id}
            name={item.name}
            id={item.id}
            handleRemoveTodo={handleRemoveTodo}
            handleTodoComplete={handleTodoComplete}
          />
        ))}

      <div className="flex justify-center">
        <div className="absolute -bottom-5">
          {!modalOpen && (
            <Button
              name={"+ New Task"}
              onClick={() => {
                setModalOpen(!modalOpen);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
export default HeaderBody;
