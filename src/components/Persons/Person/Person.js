import React from 'react';
//import Radium from 'radium';

import './Person.css';
import Auxillary from '../../../hoc/MyFragment';
import WithClass from '../../../hoc/WithClass'
import WithClassEnhanced from '../../../hoc/WithClassEnhanced'
import MyButton from '../../../hoc/MyButton';
import PropTypes from 'prop-types';

import AuthContext from '../../../context/auth-context'


/*const person = (props) => {
    console.log("Person.js render() ...")
    let buttonStyle = {backgroundColor: 'red', font:'inherit', border: '1px solid blue', padding: '8px', cursor: 'pointer'}
    const style = {
        '@media (minWidth: 500px)': {
            width: '450px'
        }
    }
    return (
        <div className = "Person" style = {style}>
            <h1>I am {props.name} and I am {props.age} years old.</h1>
            <h1>{props.children}</h1>
            <input onChange = {props.nameChanged} type = "text" value = {props.name}></input>
            <button style = {buttonStyle} onClick = {props.deleteclick}>Delete</button>
        </div>
    )
}*/

class Person extends React.Component {

    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        //this.inputElmRef.focus()
        this.inputElementRef.current.focus()
        console.log("context===", this.context.authenticated)
    }
    render() {
        console.log("Person.js render() ...")
        let buttonStyle = {backgroundColor: 'red', font:'inherit', border: '1px solid blue', padding: '8px', cursor: 'pointer'}
        const style = {
            '@media (minWidth: 500px)': {
                width: '450px'
            }
        }
        return (
        // <WithClass classes = "Person" styles = {style}>
            <div>
                {/* <AuthContext.Consumer>
                    {
                        (context) => context.authenticated ? <p>Authenticated!</p>: <p>Please Login</p>
                    }
                </AuthContext.Consumer> */}
                {this.context.authenticated ? <p>Authenticated!</p>: <p>Please Login</p>}
         
            <h1>I am {this.props.name} and I am {this.props.age} years old.</h1>
            <h1>{this.props.children}</h1>
            <input onChange = {this.props.nameChanged} 
            type = "text" 
            value = {this.props.name}
            // ref = {(inputElement) => {this.inputElmRef = inputElement}}
            ref = {this.inputElementRef}
            ></input>
            {/* <button style = {buttonStyle} onClick = {this.props.deleteclick}>Delete</button> */}

            <MyButton styles  = {buttonStyle} clickHandler = {this.props.deleteclick}>Delete</MyButton>
            </div>
            
        // </WithClass>
        );
    }
}

Person.propTypes = {
    deleteclick: PropTypes.func,
    nameChanged: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};
//export default Person;
export default WithClassEnhanced(Person, "Person", {
    '@media (minWidth: 500px)': {
        width: '450px'
    }
})