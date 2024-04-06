import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    return (
      <div className='todoList-wrapper'>
        <p>TodoList Component</p>
        <Todo />
      </div>
    )
  }
}
