import React from 'react'
import background from '../../assets/food-bg.jpg'

const Background = () => (
    <div className="partial-bg" >
        <img src={background} alt="Partial BG" styles={partialBg} />
    </div>
)

const partialBg = {
    maxHeight: 50
}

export default Background;