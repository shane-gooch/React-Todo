import React from 'react';


class TodoForm extends React.Component {

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name='text'
                    value={this.state.text}
                    onChange={this.handleChange}
                    placeholder='tasks' 
                />
                <button onClick={this.handleSubmit}>Add Task</button>
                <button onClick={this.handleRemove}>Clear Task</button>
            </form>
        );
    }
}

export default TodoForm; 