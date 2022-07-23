import test from '../static/test.png'
import React, {useEffect , useState} from 'react';
import DropList from './DropList';
import ApiService from "./APIService";
import {Link, useHistory} from "react-router-dom";




function HomePage() {

    let history = useHistory()
    const toLogin = () =>{
        history.push('/login')
    }

    const [categories, setCategories] = useState(['hello','there'])

    useEffect(() =>{
        ApiService.GetCategories()
            .then(resp => setCategories(resp))
            .catch(error => console.log(error))

    },[])
    return (
        <div className={'LoginPage'}>
            <div className={'mb-0'}>
                <img src = {test} alt = 'Logo'/>
                <h3>Welcome to MikeBay!</h3>
                <DropList categories = {categories}></DropList>
                <br/>
                <div>
                    <button className={'btn btn-primary'} onClick={toLogin}>Login</button>
                </div>
                <div>
                    <Link to = '/createacc'> create new account</Link>
                </div>

            </div>

        </div>
    );
}

export default HomePage;