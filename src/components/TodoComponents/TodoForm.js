import React from 'react';


function TodoForm(props) {
    return(
        <form className='form' onSubmit={e => props.addTask(e)}>
            <input 
                type='text' 
                name='taskInput' 
                placeholder='Task'
                value= {props.taskInput}
                onChange= {props.changeHandler} 
            />
            <button>Add Task</button>
            <button onClick={e => props.clearCompleted(e)}>Clear Completed</button>
        </form>
    );

}

export default TodoForm;