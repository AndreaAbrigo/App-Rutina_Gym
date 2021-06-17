import React from 'react';
import { Navbar, NavItem, Nav, NavbarBrand } from 'reactstrap';
import '../Style/Menu.css'

class Menu extends React.Component{
    render(){
        return(
            <Navbar className="Menu">
                <NavbarBrand className="Icon" href="/"><img width="50px" src="https://image.flaticon.com/icons/png/512/753/753045.png" alt=""/></NavbarBrand>
                {/* <Nav>
                    <div className="Nombre">Mi rutina</div>
                </Nav> */}
            </Navbar>
        )
    }
}

export default Menu;