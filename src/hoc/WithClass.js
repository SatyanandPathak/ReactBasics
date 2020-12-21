import React from 'react'

const withClass = props => {
    return (<div className = {props.classes} style = {props.styles}>
        {props.children}
    </div>);
};

export default withClass;