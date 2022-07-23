import React from "react";


function Hello(props) {

    function concatenate(name , surname){

        return name + ' ' + surname
    }
    let x = 3
    let name = 'mike '
    console.log('my name is ' + name)
    return(
        <div className= "container">
            <h1>My name is {name}</h1>
        </div>

    )
}

export default Hello;
