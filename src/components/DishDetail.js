import React from 'react';
import {CardImg, CardText, CardBody,
    CardTitle, Col, Row} from 'reactstrap';
import moment            from 'moment';
import './styles/Dish.css';
/**
 * Desde el componente padre pasaremos el selectedDish
 * y aquí sólo nos encargaremos de renderizar la 
 * selección. Debemos retornar un <div> vacío
 * porque el componente debe ser importado siempre
 * desde el componente padre. 
 * De este modo, el componente cambiará reactivamente
 * si se presiona un elemento del menú. En caso contrario,
 * se mostrará el div vacío
 */

const convertDate = (date) => {return moment(date).format("MMM DD, YYYY")}
const RenderDish = ({dish}) => {
    return(
        <Col className="col-12 col-md-5 m-1">
            <CardImg top src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>
                    {dish.name}
                </CardTitle>
                <CardText>
                    {dish.description}
                </CardText>
            </CardBody>
        </Col>
    );
}
const RenderComments = ({dishComments}) => {
    var comments = dishComments.map((comment) => {
        if(comment){
            return (
                <ul flush key={comment.id} className="commentsList">
                    <li>
                        {comment.comment}
                    </li>
                    <li>
                        -- {comment.author}, {convertDate(comment.date)}
                    </li>
                </ul>
            );
        }else{
            return(
                <div></div>
            )
        }
    });
    return(
            <Col className="col-12 col-md-5 m-1">
                <CardBody>
                    <CardTitle>
                        Comments
                    </CardTitle>
                    { comments }
                </CardBody>
            </Col>
    );
}
const DishDetail = (props) => {
    if(props.dish){
        return (
            <div className="container">
                <div className="row">
                    <Row className="selectedDish">
                        <RenderDish dish={props.dish}/>
                        <RenderComments dishComments={props.dish.comments}/>
                    </Row>
                </div>
            </div>
        );
    }else{
        return(<div></div>);
    }
}
export default DishDetail;

