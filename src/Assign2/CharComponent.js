import React from 'react';
import './Assign2.css';

const charComponent = (props) => {
    return (
        <div className = 'assign2' onClick={props.removeThisChar}>
            <p>{props.char}</p>
        </div>
    );
}

export default charComponent;