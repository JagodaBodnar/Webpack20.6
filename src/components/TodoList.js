import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

export default class TodoList extends React.Component{
    state = {
        todos: [{
            id: 1,
                text: 'clean room'
            }, {
            id: 2,
                text: 'wash the dishes'
            }, {
            id: 3,
                text: 'feed my cat'
            }]
    };
    addTodo = todo =>{
        this.setState({
            todos:  [todo, ...this.state.todos]
        })
    }
    handleDeleteTodo = (id) => {
    this.setState({
    todos: this.state.todos.filter(todo => todo.id !== id)
})
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    render(){
        return(
        <div>
            <TodoForm onSubmit={this.addTodo} />
            {this.state.todos.map(todo => (
            <Todo key={todo.id} text={todo.text}
            onDelete={() => this.handleDeleteTodo(todo.id)}/>
            ))}
        </div>
        )
    }
}