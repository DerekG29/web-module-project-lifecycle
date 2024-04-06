import React from 'react'

export default class Form extends React.Component {
  render() {
    const {
      handleInput,
      handleSubmit,
      inputValue,
      showCompleted,
      toggleShowCompleted
    } = this.props;
    return (
      <div className='form'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            placeholder='Type Todo'
            value={inputValue}
            onChange={(e) => handleInput(e)}
            required
          />
          <input type='submit' />
        </form>
        <button onClick={toggleShowCompleted}>
          {showCompleted ? 'Hide Completed' : 'Show Completed'}
        </button>
      </div>
    )
  }
}
