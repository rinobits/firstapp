import React, { Component } from 'react';
import {  CardImg, CardText, CardBody,
 CardTitle, Col, Row, ListGroup, ListGroupItem } from 'reactstrap';
import moment from 'moment';
import './DishStyles.css';
class DishDetail extends Component {
    convertDate(date){return moment(date).format("MMM DD, YYYY");}
    render() {
        const comments = this.props.selectedDish.comments.map((comment) => {
            if(comment){
                return (
                    <ListGroup flush key={comment.id} className="commentsList">
                        <ListGroupItem>
                            {comment.comment}
                        </ListGroupItem>
                        <ListGroupItem>
                            -- {comment.author}, {this.convertDate(comment.date)}
                        </ListGroupItem>
                    </ListGroup>
                );
            }else{
                return(
                    <div></div>
                )
            }
        });
        return (
            <Row className="container col-12">
                <Col className="col-12 col-md-5 m-1">
                    <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name}/>
                    <CardBody>
                        <CardTitle>
                            {this.props.selectedDish.name}
                        </CardTitle>
                        <CardText>
                            {this.props.selectedDish.description}
                        </CardText>
                    </CardBody>
                </Col>
                <Col className="col-12 col-md-6 m-1">
                    <CardBody>
                        <CardTitle>
                            <h4>Comments</h4>
                        </CardTitle>
                        <CardText>
                            { comments }
                        </CardText>
                    </CardBody>
                </Col>
            </Row>
        );
    }
}

export default DishDetail;

