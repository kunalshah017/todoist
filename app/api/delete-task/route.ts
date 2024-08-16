import connectToDatabase from "@/lib/mongodb";
import { type NextRequest } from "next/server";
import { Todo } from "@/models/todo.model";

export async function DELETE(request: NextRequest) {
  const db = await connectToDatabase();
  const { id } = await request.json();

  const task = await Todo.findByIdAndDelete(id);

  return new Response(JSON.stringify(task), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
    data: task,
  });
}