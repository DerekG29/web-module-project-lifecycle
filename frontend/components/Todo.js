import React from 'react'

export default class Todo extends React.Component {
  render() {
    console.log('Todo - Render Invoked');

    const { todo, num } = this.props;
    return (
      <div className='todo-wrapper'>
        <p>{`${num}. ${todo.name} ${todo.completed ? '✓' : ''}`}</p>
      </div>
    )
  }
}
