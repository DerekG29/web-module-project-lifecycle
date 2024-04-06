import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleCompleted, showCompleted } = this.props;
    return (
      <div className='todoList'>
        <h2>Todos:</h2>
        {
          todos.filter(todo => showCompleted || !todo.completed)
            .map(todo => 
              <Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />
            )
        }
      </div>
    )
  }
}
