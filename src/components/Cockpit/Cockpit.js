import React, {useEffect, useRef, useContext} from 'react';
import AuthContext from '../../context/auth-context'

//import Radium from 'radium'

const Cockpit = (props) => {

    const toggleBtnRef = useRef(null);
    //toggleBtnRef.current.click();

    const authContext = useContext(AuthContext);

    console.log("Cockpit context", authContext)


    useEffect(() => {
        // like componentdidmount and componentdidupdate in one function
        // The problem is this will render everytime the component id updated or mounted
        console.log("[Cockpit.js] useEffect")
        // http request
        // Mimic http request:

        /*const timer = setTimeout(() => {
            alert("an http call to post the data")
        }, 1000)*/

        // This means useEffect will execute only when props.persons is changed
        // If we want to render nly for first time load: pass empty array []

        // We can return an anonymous function to do some clean up
        // Similar to component will unmount

        // This will click the button "Toggle" as the component mounts
        toggleBtnRef.current.click();
        return () => {

            console.log("[Cockpit.js, clean up work based on dependencies")
            //clearTimeout(timer)
        }

    }, [//props.persons
    ])


    useEffect(() => {
        console.log("[Cockpit.js], seocnd useEffect")

        return () => {
            console.log("[Cockpit.js], second useEffect clean up")
        }
    })

    //let classes = ['red', 'bold'].join('') // "red, bold"
    let classes = []
    if(props.personsLength <=2){
      classes.push('red')
    }
    if (props.personsLength < 1){
      classes.push('bold')
    }

    const buttonStyle = {
        backgroundColor: 'green', 
        font:'inherit', 
        border: '1px solid blue', 
        padding: '8px', 
        cursor: 'pointer',
        ':hover': {
          backgroundColor: 'lightgreen',
          color: 'black'
        }
      }

    /*let classes = []
    let btnClass = ''
    if(props.showPersons){
        btnClass = classes.Red
    }
    let assignedClasses = []
    if(props.persons.length <=2){
        assignedClasses.push(classes.red)
    }

    if(props.persons.length <=1){
        assignedClasses.push(classes.bold)
    }*/

    return (
            <div>
                <h1>{props.title}</h1>
                <p className = {classes.join(' ')}>Number of persons is: {props.personsLength}</p>
                {/* <button style = { btnClass } key = "1" onClick = {this.switchNamehandler}>Switch Name</button> */}
                <button  ref = {toggleBtnRef} style = {buttonStyle} key = "2" onClick = {props.personsDisplay}>Toggle Display</button>
                {/* <AuthContext.Consumer>
                    {
                        (context) => <button onClick = {context.login}>Log In</button>
                    }
                </AuthContext.Consumer> */}
                <button onClick = {authContext.login}>Log In</button>
                
            </div>
    );
}

//export default Radium(Cockpit);
// React.memo will update only when props it is using changes
export default React.memo(Cockpit);