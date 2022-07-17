import React from "react";


function Hello(props) {

    function Clickme() {
        alert("button clicked")
    }

    return(
        <div className= "container">
            <h1>My full name {props.name} {props.lastname}</h1>
            <button className= "btn btn-success" onClick = {Clickme}> Click me </button>
        </div>

    )
}

export default Hello;
