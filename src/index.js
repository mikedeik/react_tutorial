import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Route , BrowserRouter} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import {CookiesProvider} from "react-cookie";
import CreateAccount from "./components/CreateAccount";
import HomePage from "./components/HomePage";



function Router(){

    return(
        <CookiesProvider>
        <BrowserRouter>
            <Route exact path = '/persons' component={App}></Route>
            <Route exact path = '/login' component={LoginPage}></Route>
            <Route exact path = '/createacc' component={CreateAccount}></Route>
            <Route exact path = '/home' component={HomePage}></Route>
        </BrowserRouter>
        </CookiesProvider>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
