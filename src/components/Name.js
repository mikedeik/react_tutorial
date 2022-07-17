import React, {Component} from "react";


class Name extends Component{

    constructor() {
        super();
        this.state ={
            name:"Mike Deiktakis"
        }
    }

    clicked = () =>{
        this.setState({
            name:this.state.name === "Mike Deiktakis" ? "Dimitra Xouta" : "Mike Deiktakis"
        })
    }
    render() {

        return(
            <div>
                <h1 className= "bg-white text-black text-center">{this.state.name}</h1>
                <button onClick={this.clicked} className= "btn btn-success">Change Text</button>
            </div>

        )
    }
}

export default Name;