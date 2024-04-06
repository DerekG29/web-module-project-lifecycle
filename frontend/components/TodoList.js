import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleCompleted } = this.props;
    return (
      <div className='todoList'>
        <h2>Todos:</h2>
        {
          todos.map(todo =>  
              <Todo
                key={todo.id}
                todo={todo}
                toggleCompleted={toggleCompleted}
              />
          )
        }
      </div>
    )
  }
}
