var names = ['Alice', 'Bob', 'Charles', 'Darwin', 'Emily', 'Fiona', 'Garrett'];

function Names(props) {
    var namesList = [];
    for (var i = 1; i <= props.upto; i++) {
        // Access the function which is the child
        // of the component
        // The function argument is the index of the
        // element
        namesList.push(props.children(i, names));
    }

    return <div>{namesList}</div>
}

function NamesList(props) {

    return (
        <Names upto={props.upto}>
            {/* this is == props.children which is why Names is expecting a function */}
            {(index, names) => <div key={index}> {names[index]} </div>}
        </Names>
    );
}

// ReactDOM.render(<NamesList upto={3}/>,
//     document.getElementById('outer'));

ReactDOM.render(<NamesList upto={5}/>,
    document.getElementById('outer'));
