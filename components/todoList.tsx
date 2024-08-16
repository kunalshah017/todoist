"use client";
import TodoCard from "@/components/ui/todo-card";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = "http://localhost:3000/api/get-tasks";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const response = await axios.get(baseUrl);
    console.log(response.data);
    setTasks(response.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div className="w-full h-[85%] flex flex-col gap-4 items-center py-5 overflow-auto">
      {tasks &&
        tasks.map((task) => (
          <TodoCard key={task._id} title={task.title} _id={task._id} />
        ))}
    </div>
  );
}
