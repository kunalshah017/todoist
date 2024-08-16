import { Todo } from "@/models/todo.model";

const addTodo = async (todo: any) => {
try {
    const newTodo = new Todo(todo);
    await newTodo.save();
    return newTodo;
} catch (error) {
    console.error(error);
    return error; 
}
};

export default addTodo;