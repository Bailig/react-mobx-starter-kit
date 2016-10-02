import React from 'react'
import { observer } from 'mobx-react'

@observer
export default class Body extends React.Component{
    filterTodo(event) {
        this.props.store.filter = event.target.value
    }
    createTodo(event) {
        if (event.which === 13) {
            this.props.store.createTodo(event.target.value)
            event.target.value = ""
        }
    }
    toggleTodo(todo) {
        todo.completed = !todo.completed
    }
    mapTodos() {
        const todos = this.props.store.filteredTodos.map( todo => (
            <li key={todo.id}>
                <input type="checkbox" value={todo.completed} checked={todo.completed} onChange={this.toggleTodo.bind(this, todo)}/>
                {todo.value}
            </li> 
        ))
        return todos
    }
    render() {
        const store = this.props.store
        return (
            <article>
                <h1>Todos</h1>
                <input onKeyPress={this.createTodo.bind(this)} placeholder="Create New" />
                <input value={store.filter} onChange={this.filterTodo.bind(this)}  placeholder="Search" />
                <a href="#" onClick={store.deleteCheckedTodo}>Clear Complete</a>
                <ul>
                    {this.mapTodos()}
                </ul>
            </article>
        )
    }
}

