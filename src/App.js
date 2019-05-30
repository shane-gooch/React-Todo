import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm';




class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
    state={
      tasks: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
      taskInput: ''
    };


    changeHandler = e => {
      e.preventDefault();
      this.setState({
        [e.target.name]: e.target.value
      })
    };
    
    addTask = e => {
      e.preventDefault();
      const newTask = {
        task: this.state.taskInput,
        id: Date.now(),
        completed: false
      }
      this.setState({
        tasks: [...this.state.tasks, newTask],
        taskInput: ''
      })
    }
    clearCompleted = (e) => {
      e.preventDefault();
      this.setState({
        tasks: this.state.tasks.filter((task) => !task.completed)
      })
    }
    render() {
      return (
        <div>
          <h1>ToDo List</h1>
          <TodoList tasks={this.state.tasks}/>
          <TodoForm 
          taskInput={this.state.taskInput} 
          changeHandler={this.changeHandler} 
          addTask={this.addTask}
          clearCompleted={this.clearCompleted}
          />
        </div>
      );
    };
  }

export default App;
