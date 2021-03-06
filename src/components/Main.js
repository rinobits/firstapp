import React, { Component }        from 'react';
import Menu                        from './Menu';
import { DISHES }                  from '../shared/dishes';
import Header                      from './Header';
import Footer                      from './Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home                        from './Home';
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        selectedDish: null
    };
  }

  render() {
    const HomePage = () => {
      return(
          <Home 
          />
      );
    }

    return (
      <div>
        <Header/>
        <Switch>
              <Route path='/home' component={HomePage} />
              <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
              <Redirect to="/home" />
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
