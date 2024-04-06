import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div className='form'>
        <form>
          <input type='text' placeholder='Type Todo'/>
          <input type='submit' />
        </form>
        <button>Hide Completed</button>
      </div>
    )
  }
}
