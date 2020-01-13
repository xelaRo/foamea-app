import React from 'react'
import { Navbar } from 'react-bootstrap'
import CustomNav from '../nav-item/nav-item.component'
import { ReactComponent  as Logo } from '../../../assets/spoon.svg'

const CustomNavbar = props =>(
    <div>
         <Navbar bg="dark" variant="dark" >
            <Logo className="d-inline-block align-top" style={logoStyle}/>
           
            <Navbar.Brand href="#home">Foamea</Navbar.Brand>
            <CustomNav />
        </Navbar>
    </div>
 
)

const logoStyle = {
    width: 40,
    height: 40,
    fill: "white",
    marginRight: 10
}

export default CustomNavbar;