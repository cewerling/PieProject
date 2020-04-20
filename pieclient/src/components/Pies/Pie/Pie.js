import React from 'react';
import './Pie.css';
import {CardTitle, CardBody, CardSubtitle, CardText} from 'reactstrap';

const Pie = (props) => {
    console.log(props);
    console.log(props.passedPie.nameOfPie);
    return (
        <CardBody>
            <CardTitle><b>Name: </b>{props.passedPie.nameOfPie}</CardTitle>
            <CardText><b>Base: </b>{props.passedPie.baseOfPie}</CardText>
            <CardText><b>Crust: </b>{props.passedPie.crust}</CardText>
            <CardText><b>Baking Time: </b>{props.passedPie.timeToBake} mins</CardText>
            <CardText><b>Servings: </b>{props.passedPie.servings}</CardText>
            <CardSubtitle><b>Rating: </b>{props.passedPie.rating}/5</CardSubtitle>
        </CardBody>
    );
};

export default Pie;