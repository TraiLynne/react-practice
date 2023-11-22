class Circle extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            color:'green',
            backgroundColor :'pink'
        };
    }


    render() {
        const cirStyle = {
            color : this.state.color,
            backgroundColor : this.state.backgroundColor
        }

        return(
            <div className="circle" style={cirStyle}>
                Hello React developers!
            </div>
        );
    }
}


ReactDOM.render(<Circle />, document.getElementById('react-state'))