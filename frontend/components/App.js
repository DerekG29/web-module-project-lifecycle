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
    axios.get(URL)
      .then(res => this.setState({ ...this.state, todos: res.data.data}))
      .catch(err => console.error(err));
  }

  toggleCompleted = (id) => {
    this.setState({ ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === id)
          return { ...todo, completed: !todo.completed};
        return todo;
      })
    })
    axios.patch(`${URL}/${id}`)
      .then(res => console.log(res.data.message))
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='app-wrapper'>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />
        <Form />
      </div>
    )
  }
}
