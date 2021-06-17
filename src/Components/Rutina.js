import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle, Col, Row} from 'reactstrap';
import '../Style/Rutina.css'
import DetalleEjercicio from './DetalleEjercicio';

class Rutina extends React.Component{
    render(){
        return(
            <Col>
                <Card className="Card">
                    <CardBody>
                        <Row>
                        <Col>
                            <CardTitle><b>{this.props.ejercicio}</b></CardTitle>
                            <CardSubtitle>Cantidad: {this.props.cantidad}</CardSubtitle>
                        </Col>
                        <Col className="Propiedades">
                            <DetalleEjercicio props={this.props}/>
                        </Col>  
                        </Row>   
                    </CardBody>
                </Card>
            </Col>
        )
    }
}

export default Rutina;