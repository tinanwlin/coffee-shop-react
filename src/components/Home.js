import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/products'>Products</Link>
      </div>
    )
  }
}

export default Home;