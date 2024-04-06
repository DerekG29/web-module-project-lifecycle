import React from 'react';
import Todo from './Todo';

export default class TodoList extends React.Component {
  render() {
    console.log('TodoList - Render Invoked');

    const { todos, toggleCompleted } = this.props;
    return (
      <div className='todoList'>
        <h2>TodoList Component</h2>
        {
          todos.map((todo, idx) =>  
              <Todo
                key={todo.id}
                todo={todo}
                num={idx + 1}
                toggleCompleted={toggleCompleted}
              />
          )
        }
      </div>
    )
  }
}
