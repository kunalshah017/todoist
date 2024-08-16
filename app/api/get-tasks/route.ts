import connectToDatabase from "@/lib/mongodb";
import { type NextRequest } from "next/server";
import { Todo } from "@/models/todo.model";

export async function GET(request: NextRequest) {
  const db = await connectToDatabase();
//   get all tasks
  const tasks = await Todo.find({});

  return new Response(JSON.stringify(tasks), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    data: tasks,
  });
}