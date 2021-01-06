import React from 'react';
import './buttons.css'

const Buttons = ({label}) => {
    return <div data-testid="button" className="button-style">{label}</div>
}

export default Buttons;