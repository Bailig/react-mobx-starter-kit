import { computed, observable } from "mobx"
import Todo from "./todoState"

class TodoStore {
    @observable todos = []
    @observable filter = ""
    @computed get filteredTodos() {
        if (this.filter.trim() !== "") {
            const filteredTodos = this.todos.filter( todo => {
                if (todo.value.toLowerCase().includes(this.filter.toLowerCase())){
                    return todo
                }
            })    
            return filteredTodos  
        }
        else {
            return this.todos
        }
    }
    createTodo(value) {
        this.todos.push(new Todo(value))
    }
    deleteCheckedTodo = () => {
        const incompleteTodos = this.todos.filter(todo => !todo.completed)
        this.todos.replace(incompleteTodos)
    }
}

let store = window.store = new TodoStore

export default store


