import React from 'react';

const validationForString = (props) => {
    let displayText = props.stringLength < 5 ? "Text too short" : "Text long enough";
    return <p>{displayText}</p>
}

export default validationForString;