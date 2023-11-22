class Student extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='student'>
                <div>
                    Student ID: {this.props.id}
                </div>
                <div>
                    Name: {this.props.studentName}
                </div>
                <div>
                    Enrolled: {this.props.enrolled ? 'yes' : 'no'}
                </div>
                <div>
                    Campus: {this.props.campus}
                </div>
                <div>
                    Major: {this.props.major}
                </div>
                <div>
                    Courses: {this.props.courses}
                </div>
            </div>
        );
    }
};

Student.propTypes = {
    id: PropTypes.number,
    studentName: PropTypes.string,
    enrolled: PropTypes.bool,
    major: PropTypes.string.isRequired,
    campus: PropTypes.oneOf(['North', 'South']),

    courses(prop, propName) {
        var propValue = prop[propName];
        
        if (propValue == 'Statistics' || propValue == 'Philosophy') {
            throw Error('Sorry, this course is not offered currently');
        }
    }
}     


Student.defaultProps = {   
    id: Math.floor(Math.random() * 100000000),
    enrolled: true
};

// TODO recording: Paste in each of these in turn, clear the console in developer tools
// and refresh the page and show the result

// ReactDOM.render( 
//     <Student  />,  
//     document.getElementById("react-default-prop") 
// ); 

// ReactDOM.render( 
//     <Student  major="Computer Science"/>,  
//     document.getElementById("react-default-prop") 
// ); 

// ReactDOM.render( 
//     <Student studentName={1234} major="Computer Science"/>,  
//     document.getElementById("react-default-prop") 
// ); 

// ReactDOM.render( 
//     <Student studentName={"Peter"} 
//              major="Computer Science"
//              courses="Philosophy"/>,  
//     document.getElementById("react-default-prop") 
// ); 

// ReactDOM.render( 
//     <Student studentName={"Peter"} 
//              campus="East"
//              major="Computer Science"
//              courses="Math"/>,  
//     document.getElementById("react-default-prop") 
// ); 


ReactDOM.render( 
    <Student studentName={"Peter"} 
             campus="North"
             major="Computer Science"
             courses="Math"/>,  
    document.getElementById("react-default-prop") 
); 
















