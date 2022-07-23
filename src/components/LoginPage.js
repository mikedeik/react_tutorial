import '../css/LoginPage.css'
import React, {useEffect, useState} from 'react';
import ApiService from "./APIService";
import {useCookies} from "react-cookie";
import {useHistory,Link} from "react-router-dom";

import test from '../static/test.png'



function LoginPage() {


    const[username , setUsername] = useState()
    const[password , setPassword] = useState()
    const[isLogged , setIsLogged] = useState(true)
    const[cookie,setCookie] = useCookies()

    let history = useHistory()
    useEffect(() =>{
        if(!cookie['myToken']){
            return
        }
        history.push('/persons')
    },[cookie])


    const loginBtn = () =>{


        ApiService.LoginUser({username,password})
            .then(resp => resp.token ? setCookie('myToken', resp.token) : 0)
            .catch(error => console.log(error))

        if(!cookie['myToken']){
            setIsLogged(false)
        }

    }


    return (
        <div className={'LoginPage'}>
            <div className={'mb-3'}>
                <img src = {test} alt = 'Logo'/>
                <br/><br/><h1>Login Page to Server</h1>
                <br/>
                <br/>
                <br/>
                <p>
                    <br/><label htmlFor={'username'} className={'form-label'}>Username </label>
                    <br/><input type={'text'} className={'form-text'} id={'username'}
                         value={username} onChange={e => setUsername(e.target.value)}
                />
                </p>
                <p>
                    <br/><label htmlFor={'password'} className={'form-label'}>Password </label>
                    <br/><input type={'password'} className={'form-text'} id={'username'}
                                value={password} onChange={e => setPassword(e.target.value)}
                                />
                </p>
                <p>
                    <br/><button onClick={() =>{loginBtn(); }} className="btn btn-primary" >Sign In</button>

                </p>

                    <Link to = '/createacc'> create new account</Link>


                    <p> {isLogged ? null : 'Wrong username or password' }</p>


            </div>
        </div>
    );
}

export default LoginPage;