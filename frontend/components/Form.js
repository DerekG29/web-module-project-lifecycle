import React from 'react'

export default class Form extends React.Component {
  render() {
    const { handleInput, handleSubmit, inputValue } = this.props;
    return (
      <div className='form'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            placeholder='Type Todo'
            value={inputValue}
            onChange={(e) => handleInput(e)}
          />
          <input type='submit' />
        </form>
        <button>Hide Completed</button>
      </div>
    )
  }
}
