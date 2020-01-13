import React from 'react'
import background from '../../assets/partial-bg.jpg'
import { Row } from 'react-bootstrap'

import './background.styles.scss'

const Background = () => (
    <Row>
        <div className="partial-bg" >
            <div style={{backgroundImage:`url(${background})`}} alt="Partial BG" className='partial-image-bg' >
                <div className="partial-container">
                    <div className="box-container">
                        <h1>Foamea</h1>
                        <h3>Pentru gurmandul din tine</h3>
                    </div>
                </div>
            </div>
        </div>
    </Row>
)


export default Background;