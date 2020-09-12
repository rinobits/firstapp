import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle } from 'reactstrap';
import DishDetail from './DishDetail';
const RenderMenuItem =  ({dish, onClick}) => {
    return (
        <Card
            >
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}
/**
 * Hemos agregadoo el componente DishDetail
 * para renderizar la información resultante
 * de la selección del usuario
 */
const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
                <RenderMenuItem dish={dish}/>
                <DishDetail selectedDish={dish}/>
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );
}

export default Menu;