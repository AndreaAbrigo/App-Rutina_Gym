import React from 'react';
import {CardImg, Button, Container, Modal, ModalBody, ModalFooter, ModalHeader, CardSubtitle} from 'reactstrap';
import '../Style/DetalleEjercicio.css'

class DetalleEjercicio extends React.Component{
    constructor(props){
        super();

        // State hace referencia al estado del componente, el cual se actualiza antes de que el componente sea procesado y renderizado
        this.state = {
            Modal:false,
        };

        // Bind hace que los argumentos recibidos  por la clase puedan ser compartidos con los demás métodos de clase
        this.toogle = this.toogle.bind(this)
    }

    toogle(){
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render(){
        return(
            <Container>
                <Button className="Btn" onClick={this.toogle}>Ver detalles</Button>
                <Modal isOpen={this.state.modal}> 
                {/* isOpen devuelve un valor booleano que indica si se muestra la ventana emergente actual  */}
                    <ModalHeader className="Colores">{this.props.props.ejercicio}</ModalHeader>
                    <ModalBody>
                        <CardImg src={this.props.props.imagen}/>
                        <CardSubtitle className="Bloque"><b className="Colores">Detalles del ejercicio</b></CardSubtitle>
                        {this.props.props.descripcion}
                        <p className="Bloque"><b className="Colores">Cantidad: </b> {this.props.props.cantidad}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="Secondary" onClick={this.toogle}>Volver</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default DetalleEjercicio;