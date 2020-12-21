React Class Component Lifecycle:
=================================

Component Lifecycle Creation:
=============================
1. constructor(): 
    receives props
    call super(props)
    Do: Set up state
    Don't: Cause side effects like sending http request, storing something to local storage browser.
    Impacts perf and cause unnecessary re-render

2. getDerivedStateFromProps(props, state): 
    when props change for class based component, then we can sync up with state

3. render()
    renders the dom
    do not send http requests etc., 

4. Rneder Child Components:

5. componentDidMount():
    can cause side effects like http request
    do not update the state like setState, hiwever we can do with promise
    

Component LIfecycle - Updation:
===============================
1. getDerivedStateFromProps(props, state): 
    initialize or update your state based on external changes
    no side effects like http request

2. shouldComponentUpdate: 
    allows to cancel the avaluating and updating the component
    used for performance benefits
    no side effects

3. render()

4. Child component updates

5. getSnapshorBeforeUpdate(prevProps, prevState):
    no side effects
    last min dom operations

6. componentDidUpdate:
    cause side effects like HTTP request 
    dont update the state like outside then of promise. Always set state within then


================================

constructor
getDerivedStateWithProps
getSnapshotBeforeUpdate
componentDidCatch
componentWillUnmount

==========================

shouldComponentUpdate
componentDidUpdate
componentDidMount
render