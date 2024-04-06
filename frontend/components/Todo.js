import React from 'react'

export default class Todo extends React.Component {
  render() {
    const { todo, toggleCompleted } = this.props;
    return (
      <div className='todo' onClick={() => toggleCompleted(todo.id)}>
        <p>{`${todo.name} ${todo.completed ? '✓' : ''}`}</p>
      </div>
    )
  }
}
