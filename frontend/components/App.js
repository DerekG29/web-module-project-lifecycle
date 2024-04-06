import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';
import Form from './Form';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: []
    };
  }

  componentDidMount() {
    console.log('App - CDM Invoked');
    axios.get(URL)
      .then(res => this.setState({ ...this.state, todos: res.data.data}))
      .catch(err => console.error(err));
  }

  render() {
    console.log('App - Render Invoked');
    return (
      <div className='app-wrapper'>
        <h2>App Component</h2>
        <TodoList todos={this.state.todos} />
        <Form />
      </div>
    )
  }
}
