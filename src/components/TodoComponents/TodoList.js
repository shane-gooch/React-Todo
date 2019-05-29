// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//Call ToDo in the LIst
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'



export default class TodoList extends React.Component {
    state = {
        todos: []
    };

    addTodo = (todo => {
        this.setState({
            todos: [todo, ...this.state.todos]
        });
    });

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    return {
                        id: todo.id,
                        text: todo.text,
                        complete: !todo.complete
                    }
                } else {
                    return todo; 
                }
            })
        })

    }

    render() {
        return (
            <div>
                <TodoForm onSubmit={this.addTodo}/> 
                {this.state.todos.map(todo => (
                    <Todo 
                    key={todo.id} 
                    toggleComplete={() => this.toggleComplete(todo.id)}
                    text={todo.text} />
                ))}
            </div>
        );
    }
}
