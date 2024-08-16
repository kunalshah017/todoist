import connectToDatabase from "@/lib/mongodb";
import { type NextRequest } from "next/server";
import addTodo from "@/controllers/addTodo.controller";

export async function POST(request: NextRequest) {
    const db = await connectToDatabase();
    const { title } = await request.json();

    try {
        const todo = await addTodo({ title });
        return new Response(JSON.stringify(todo), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
            data: todo,
        });
    } catch (error) {
        return new Response(JSON.stringify(error), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
            data: error,
        });
    }

}