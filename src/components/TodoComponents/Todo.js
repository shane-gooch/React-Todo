import React from 'react'; 


const Todo = props => {
    console.log(props)
    return (
        <div 
            style={{
                textDecoration: props.completed ? 'line-through' : ''
            }}
            onClick={() => props.toggleTask(props.id)}
        >
            <p>{props.name}</p>
        </div>
    );
};


export default Todo;