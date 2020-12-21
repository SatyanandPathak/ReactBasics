import './App.css';
import React from 'react';

import Radium, {StyleRoot} from 'radium';

// import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import AuthContext from '../context/auth-context';

/**
 * Inline styles for pseudo selectors and media queries: Used Radium
 */

class App extends React.Component {

  constructor(props){
    super(props)
    console.log('[App.js constructor]')

    /*this.state = {
      persons: [
        {id: "1",  name: "Satyanand", age: 28},
        {id: "2",  name: "Sunita Kumari", age: 26},
        {id: "3",  name: "Saksham", age: 4}
      ],
      anotherState: "Default value",
      showPersons: false
    }*/

  }

  state = {
    persons: [
      {id: "1",  name: "Satyanand", age: 28},
      {id: "2",  name: "Sunita Kumari", age: 26},
      {id: "3",  name: "Saksham", age: 4}
    ],
    anotherState: "Default value",
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    autheticated: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js getDerivedStateFromProps]', props)
    return state;
  }

  switchNamehandler = () => {
    this.setState({persons: [
      {id: "1",  name: "Satyanand Pathak", age: 28},
      {id: "2", name: "Sunita Kumari Pathak", age: 26},
      {id: "3", name: "Saksham Pathak", age: 4}
    ]})
  }

  handlePersonDisplay = () => {
    const displayPerson = this.state.showPersons
    this.setState({showPersons: !displayPerson})
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {...this.state.persons[personIndex]}
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    // Correcy way of doing set State when we depend on older state
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });


    // this.setState({ persons:persons,
    //   changeCounter: this.state.changeCounter + 1
    //  })
  }

  deleteHandler = (personIndex) => {
    //const persons = this.state.persons;
    //const persons = this.persons.slice() // another way to copy array
    const persons = [...this.state.persons] // Best way to copy array using ES6 spread operator
    persons.splice(personIndex, 1);
    this.setState({persons});
  }

  loginHandler = () => {
    console.log("setting login to true")
    this.setState({autheticated: true})
  }

  /*
  This gived a warning as it is depricated
  componentWillMount() {
    console.log('App.js componentWillMount')
  }*/



  componentDidMount(){
    console.log('App.js componentDidMount()')
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('App.js shouldComponentUpdate()')
    return true;

  }

  componentDidUpdate(){
    console.log('App.js componentDidUpdate()')
  }

  render() {
    console.log('App.js render()...')
    let persons = ''
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


    if (this.state.showPersons){
      persons = <Persons persons = {this.state.persons} 
                        nameChanged ={this.nameChangedHandler}
                        personDeleted = {this.deleteHandler}
                        isAuthenticated = {this.state.autheticated}
                        ></Persons>
      buttonStyle.backgroundColor = 'red'
      buttonStyle[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    //let classes = ['red', 'bold'].join('') // "red, bold"
    let classes = []
    if(this.state.persons.length <=2){
      classes.push('red')
    }
    if (this.state.persons.length < 1){
      classes.push('bold')
    }

    return (
      <StyleRoot>
        <div className="App">
        <button onClick = {() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
          {/* <p className = {classes.join(' ')}>Number of persons is: {this.state.persons.length}</p>
          <button style = { buttonStyle } key = "1" onClick = {this.switchNamehandler}>Switch Name</button>
          <button style = {buttonStyle} key = "2" onClick = {this.handlePersonDisplay}>Toggle Display</button> */}
          {/* <ButtonWidget onClick = {this.handlePersonDisplay}>Toggle Display</ButtonWidget> */}
          
          {/*
          Wrap only the parts of the component where you want Context
          */}
          <AuthContext.Provider value = {{authenticated: this.state.autheticated, login: this.loginHandler}}>
          { this.state.showCockpit?
          <Cockpit 
                  showPersons = {this.state.showPersons} 
                  personsLength = {this.state.persons.length} 
                  personsDisplay = {this.handlePersonDisplay}
                  title = {this.props.title}
                  >
          </Cockpit>: null}
          {persons}
        </AuthContext.Provider> 
        </div>
      </StyleRoot>
      
    );
  }
}

/*const App = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      {name: "Satyanand", age: 28},
      {name: "Sunita Kumari", age: 26},
      {name: "Saksham", age: 4}
    ]
  })

  const [otherState, setOtherState] = useState("Default Value")

  const switchNamehandler = () => {
    setPersonsState({persons: [
      {name: "Satyanand Pathak", age: 28},
      {name: "Sunita Kumari Pathak", age: 26},
      {name: "Saksham Pathak", age: 4}
    ]})
  }

  let persons = personsState.persons.map((person, index) => {
    return <Person key = {index} name = {person.name} age = {person.age}></Person>
  })
  return (
    <div className = "App">
      <button onClick = {switchNamehandler}>Switch Name</button>
      {persons}

    </div>
  );
}*/



export default Radium(App);
