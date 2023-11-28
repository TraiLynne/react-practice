function Todo(props) {
    return <li> TODO: {props.item}</li>
}

function List(props) {
    var list = ['clear desk', 'complete email', 'shopping', 'exercise'];

    // Pass in an arbitrarily complex Javascript expression as
    // the child expression for a component.
    // This expands into a list of JSX expressions
    return (
        <ul>
            {list.map(todo => <Todo key={todo} item={todo}/>)}
        </ul>
    );
}

ReactDOM.render(<List/>,
    document.getElementById('outer'));
