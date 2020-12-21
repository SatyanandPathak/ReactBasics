import React from 'react'
import Person from './Person/Person'
import authContext from '../../context/auth-context';


/*const persons = (props) => {
  console.log('Persons.js rendering..')
  return props.persons.map((person, index) => {
        return (<Person key = {index} name = {person.name} age = {person.age} 
        nameChanged = {(event) => props.nameChanged(event, person.id)}
        deleteclick = {() => props.personDeleted(index)}></Person>
  )});
    }*/

    // If we have checks inside shouldComponentUpdate for all changes in props we depends on,
    // then we can simply use PureComponent instead of Component
  class Persons extends React.PureComponent {

    /*
    static getDerivedStateFromProps(props, state){
      console.log('Persons.js getDerivedStateFromProps')
      return state;
    }*/

    // No more supported
   /* componsntWillReceiveProps(props){
      console.log('Persons.js componsntWillReceiveProps...', props)
    }*/





    /*shouldComponentUpdate(nextProps, nextState){
      //if(nextProps.persons != this.props.persons)
      console.log('Persons.js shouldComponentUpdate...')
      return nextProps.person !==  this.props.persons;
      
    }*/

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('Persons.js getSnapshotBeforeUpdate...')
      return {message: 'Snapshot!'};

    }
    componentWillUnmount() {
      // any clean up can be done here
      console.log("[Persons.js] component will unmount")
    }

    /*
    deprecated
    componentWillUpdate(){

    }*/


    componentDidUpdate(prevProps, prevState, snapshot){
      // used to fetch data from ajax
      console.log('Persons.js componentDidUpdate...')
      console.log('Persons.js snapshot value is:', snapshot)
    }

    render() {
      console.log('Persons.js rendering..')
      return this.props.persons.map((person, index) => {
        return (<Person key = {index} name = {person.name} age = {person.age} 
        nameChanged = {(event) => this.props.nameChanged(event, person.id)}
        deleteclick = {() => this.props.personDeleted(index)}></Person>)})
    }
  }

//export default persons;
export default Persons;
    
