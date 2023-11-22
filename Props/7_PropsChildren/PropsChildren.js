// The props.children property holds all the elements
// between the component tags

const RedText = (props) => {
    return <div className="red"> {props.children} </div>
}

const GreenText = (props) => {
    return <div className="green"> {props.children} </div>
}

// Children here is only the text element
ReactDOM.render(<RedText>Hello</RedText>,
    document.getElementById('outer1'));

// Here children represents a whole bunch of HTML.
ReactDOM.render(
    <GreenText>
        Some more nested elements:
        <span><u>here</u></span> &amp; <span><b><i>here</i></b></span>
    </GreenText>,
    document.getElementById('outer2'));

ReactDOM.render(
    <RedText>
        Some nested elements:
        <span><i>here</i></span> &amp; <span><b>here</b></span>
    </RedText>,
    document.getElementById('outer3'));

