import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,
  CardTitle } from 'reactstrap';
import DishDetail from './DishDetail.js'
class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
        selectedDish: null
    }
  }
  onDishSelect(dish) {
      this.setState({ selectedDish: dish});
  }
  renderDish(dish) {
    if (dish)
        return(
          <DishDetail selectedDish={this.state.selectedDish}></DishDetail>
        );
    else
        return(
            <div></div>
        );
}
render() {
    const menu = this.props.dishes.map((dish) => {
        return (
          <div  className="col-12 col-md-5 m-1">
            <Card key={dish.id}
              onClick={() => this.onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        );
    });
    /* 
      EN EL RETURN RENDERIZAMOS EL COMPONENTE FINAL
    */
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
            <div className="row col-12">
              <div>
                {this.renderDish(this.state.selectedDish)}
              </div>
            </div>
        </div>
    );
}
}

export default Menu;