
class Counter extends React.Component {

    state = {
        counter: 0
    };

    // The increment count which handles an event receives an event object as its input argument
    incrementCount = (e) => {
        console.log(e.type + ' ' + this.state.counter);

        this.setState(function(prevState, props) {
            return {
                counter: prevState.counter + props.increment
            }
        });
    };

    decrementCount = (e) => {
        console.log(e.type + ' ' + this.state.counter);

        this.setState(function(prevState, props) {
            return {
                counter: prevState.counter - props.decrement
            }
        });
    };

    mouseEnter = () => {
        console.log('Mouse enter occurred: ' + this.state.counter);
    };

    render() {
        // The onClick handler has to be on the element within the component
        // Event listening can be done on the capture phase by properties with the "Capture" suffix
        return (
            <div>
                <div className="box">
                    {this.state.counter}
                </div>
                <button className="button"
                        onClick={this.incrementCount}
                        onMouseEnter={this.mouseEnter}>
                    +
                </button>
                <button className="button"
                        onClick={this.decrementCount}
                        onMouseEnter={this.mouseEnter}>
                    -
                </button>
            </div>
        );
    }
}

// The onClick event is not on the component, it has to be on an element within the component

ReactDOM.render(
    <Counter increment={1} decrement={1}/>, 
    document.getElementById('outer')
);
