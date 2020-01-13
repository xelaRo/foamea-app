import React from 'react';
import { Nav } from 'react-bootstrap'

const CustomNav = props => (
    <div>
        <Nav className="mr-auto">
            <Nav.Link href="#home">Acasa</Nav.Link>
            <Nav.Link href="#features">Rapoarte</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
        </Nav>
    </div>
)

export default CustomNav;