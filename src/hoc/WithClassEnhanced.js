// This is not a component but a simple HO function which returns a decorated wrapped component 
// applying the classes and/or styles to it

const withClassEnhanced = (WrappedComponent, className, styles) => {
    return props => (
        <div className = {className} styles = {styles}>
            
            <WrappedComponent {...props}/>
        </div>
    );
}

export default withClassEnhanced;