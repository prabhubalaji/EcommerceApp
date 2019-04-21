import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import Router from './Router'

const Navbar = (props) => <nav>
  <li><NavLink to='/'>Home</NavLink></li>
  <li><NavLink to='/cart'>Cart</NavLink></li>
</nav>
class App extends Component {
  render() {
    return (
      <div className="page-container">
		    <h1>Welcome to React-Redux E-commerce Portal</h1>
        <Navbar />
        <Router />
	    </div>
    );
  }
}

export default App;
