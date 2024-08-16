import Nav from "../components/nav";
import TaskInput from "../components/taskInput";
import TodoList from "../components/todoList";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <Nav />
      <div className="h-[90%] w-full flex flex-col items-center py-5 gap-8">
        <TaskInput />
        <TodoList />
      </div>
    </div>
  );
}
