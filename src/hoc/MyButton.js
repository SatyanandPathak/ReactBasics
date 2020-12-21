import React from 'react';

const MyButton = (props) => <button 
                                style = {props.styles} 
                                className = {props.classes} 
                                onClick = {props.clickHandler}>{
                                    props.children}
                            </button>



export default MyButton;