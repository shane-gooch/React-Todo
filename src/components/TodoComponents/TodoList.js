// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
//Call ToDo in the LIst
import React from 'react';
import Todo from './Todo'


function TodoList(props) {
    return (
        <div>
            {props.tasks.map(task => 
            <Todo 
            key={task.id}
            name={task.task} 
            toggleTask={props.toggleTask}
            id={task.id}
            />
            )}
        </div>
    )
}

export default TodoList; 