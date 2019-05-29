import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import shortid from 'shortid';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      id: '',
      text: "",
      complete: '',
    };

  }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            id: shortid.generate(),
            text: this.state.text,
            complete: false,
        });
        this.setState({
            text: ''
        })
    };

    handleRemove = (e) => {
        e.preventDefault();
        this.setState({
            text: ''
        })
    }
    
    render() {
      return(
        <div className="App">
          <TodoList />

        </div>
      )
    }
  }

export default App;
