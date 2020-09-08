import React, {Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Las pizzas di juan</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }
}
export default App;