import React ,{useState}from 'react';
import ApiService from './APIService'
import {useHistory} from "react-router-dom";


function CreateAccount(props) {

    const[username , setUsername] = useState()
    const[password , setPassword] = useState()
    const[confirmPassword , setCPassword] = useState()
    const[email , setEmail] = useState()
    const[valid, setValid] = useState(true)
    const[wrongUN , setWrong] = useState(false)

    let history = useHistory()
    const CreateAccBtn = () => {
        if(password == confirmPassword){
            ApiService.CreateUser({username,password,email})
                .then(resp => resp.status === 201 ? setValid(true) : setValid(false))
        }
        else{
            setValid(false)
            return
        }
        if(valid){
            history.push('/login')
        }
        else{
            setWrong(true)
        }

    }


    return (
        <div className={'LoginPage'}>
            <div className={'mb-3'}>
                <br/><br/><h1>Create New User</h1>
                <br/><br/><br/>
                <p>
                    <br/><label htmlFor={'username'} className={'form-label'}>Username </label>
                    <br/><input type={'text'} className={'form-text'} id={'username'}
                                value={username} onChange={e => setUsername(e.target.value)}/>
                </p>
                <p>
                    <br/><label htmlFor={'password'} className={'form-label'}>Password </label>
                    <br/><input type={'password'} className={'form-text'} id={'username'}
                                value={password} onChange={e => setPassword(e.target.value)}/>
                </p>
                <p>
                    <br/><label htmlFor={'password'} className={'form-label'}>Confirm password </label>
                    <br/><input type={'password'} className={'form-text'} id={'username'}
                                value={confirmPassword} onChange={e => setCPassword(e.target.value)}/>
                </p>
                <p className= 'alert-danger'>{valid ? null : 'password is not the same'}</p>
                <p>
                    <br/><label htmlFor={'email'} className={'form-label'}>E-mail </label>
                    <br/><input type={'email'} className={'form-text'} id={'email'}
                                value={email} onChange={e => setEmail(e.target.value)}/>
                </p>
                <button className= 'btn btn-primary' onClick={CreateAccBtn}>Create User</button>
                <p className= 'alert-danger'>{wrongUN ? 'username allready in use' : null }</p>

            </div>

        </div>
    );
}

export default CreateAccount;