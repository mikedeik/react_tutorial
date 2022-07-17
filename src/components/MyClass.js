import React, {Component} from "react";


class MyClass extends Component{


    render() {
        return(
            <div className= "container">
                <h1> My email is :{this.props.email}</h1>
                <button className= "btn btn-primary" onClick={this.props.myclick}>Click</button>
            </div>
        )
    }
}

export default MyClass;