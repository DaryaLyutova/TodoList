import { makeAutoObservable } from "mobx";
interface TodoType {
    id: number,
    task: string,
    description: string,
    date: string
}

// export let todos = observable<TodoType>([])

// export const addTodo = action((todo: TodoType) => {
//     todos.push(todo);
// })

// export const removeTodo = action((id: number) => {
//     const index = todos.findIndex(todo => todo.id === id)

//     if (index !== -1) {
//         todos.splice(index, 1)
//     }
// })


class Todo {
    todos: TodoType[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo: TodoType) {
        this.todos.push(todo)
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => id !== todo.id)
    }

    changeTodo(todo: TodoType) {
        this.todos.splice((todo.id - 1), 1, todo);
    }
}

const todo = new Todo();

export default todo;
export type { TodoType };