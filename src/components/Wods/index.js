import React from 'react';
import './style.css';

// throwing the wods in my app.js containter
function Wods(props) {
    return (
        <div style ={{ backgroundImage: `url(${props.image})`}}
        className="square col-md-4"
        onClick={() => props.handleclick(props.id)}></div>
    )
}

export default Wods;