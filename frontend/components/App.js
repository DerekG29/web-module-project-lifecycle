import React from 'react';
import axios from 'axios';

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log('App - CDM Invoked');
    axios.get(URL)
      .then(res => this.setState(res.data.data))
      .catch(err => console.error(err));
    
  }

  render() {
    console.log('App - Render Invoked');
    return <div>Hello World</div>
  }
}
