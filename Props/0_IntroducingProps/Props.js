class Greeting extends React.Component {    
    render() {
        return(
            <div className = 'prop-class'>       
                <h2>{this.props.message}</h2>
            </div>
        );
    }

} 

ReactDOM.render(<Greeting message = "Hello React Developers!"/>,
    document.getElementById('react-prop1'));

ReactDOM.render(<Greeting message = "React is definitely more fun now, isn't it?"/>,
    document.getElementById('react-prop2'));
