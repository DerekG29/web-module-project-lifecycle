import React from 'react'

export default class Todo extends React.Component {
  constructor() {
    super();
  }

  render() {
    console.log('Todo - Render Invoked');

    const { todo, num, toggleCompleted } = this.props;
    return (
      <div className='todo' onClick={() => toggleCompleted(todo.id)}>
        <p>{`${num}. ${todo.name} ${todo.completed ? '✓' : ''}`}</p>
      </div>
    )
  }
}
