import React from 'react';

const ButtonWidget = (props) => {
    let defaultStyle = {backgroundColor: 'green', font:'inherit', border: '1px solid blue', padding: '8px', cursor: 'pointer'}
    let buttonStyle = props.buttonStyle || defaultStyle
    return (
        <button style = {buttonStyle}>{props.children}</button>
    )
}
export default ButtonWidget;