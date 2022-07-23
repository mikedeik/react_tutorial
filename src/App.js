import './App.css';
import React, {useEffect, useState} from "react";
import LoginPage from "./components/LoginPage";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useCookies} from "react-cookie";




function App() {

    const [persons, setPersons] = useState([])

    const [thistoken] = useCookies(['myToken'])

    console.log("lets see what we have " + thistoken['myToken'])
    useEffect(() => {
        console.log('this runs')

        fetch('http://localhost:8000/persons/',{
            'method':'GET',
            headers: {
                'Content-Type': 'text-plain',
                'Authorization': 'Token ' + thistoken['myToken'],
            }
        })
            .then(resp => resp.json())
            .then(resp => setPersons(resp))


    },[])

    return (
        <div className="App">
            <h1>First Page</h1>

            {persons.map(person => {
                return <h3 key={person.id}> {person.first_name} {person.last_name}<br/>{person.birthdate} <hr/> </h3>
            })
            }
            <button className={'btn btn-primary'}>Create</button>
            <form className={'form-text'}>First Name</form>
        </div>

    );
}

export default App;
