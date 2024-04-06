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
      todos: [],
      showCompleted: true
    };
  }

  fetchState = () => {
    axios.get(URL)
    .then(res => this.setState({ ...this.state, todos: res.data.data}))
    .catch(err => console.error(err));
  }

  componentDidMount() {
    this.fetchState();
  }

  toggleCompleted = (id) => {
    this.setState({ ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === id)
        return { ...todo, completed: !todo.completed};
      return todo;
    })
  });
  axios.patch(`${URL}/${id}`)
    .then(res => console.log(res.data.message))
    .catch(err => console.error(err));
  }

  toggleShowCompleted = () => {
    this.setState({ ...this.state, showCompleted: !this.state.showCompleted});
  }

  handleInput = (e) => {
    const input = e.target.value;
    this.setState({ ...this.state, inputValue: input})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { name: this.state.inputValue, completed: false }
    axios.post(URL, newTodo)
      .then(res => {
        console.log(res.statusText);
        this.fetchState();
        this.setState({ ...this.state, inputValue: ''})
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className='app-wrapper'>
        <TodoList
          todos={this.state.todos}
          toggleCompleted={this.toggleCompleted}
          showCompleted={this.state.showCompleted}
        />
        <Form
          handleInput={this.handleInput}
          handleSubmit={this.handleSubmit}
          inputValue={this.state.inputValue}
          showCompleted={this.state.showCompleted}
          toggleShowCompleted={this.toggleShowCompleted}
        />
      </div>
    )
  }
}
