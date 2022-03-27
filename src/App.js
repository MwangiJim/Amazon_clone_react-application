import Header from './components/Header';
import logo from './logo.svg';
import "./App.css"
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CheckoutPage from './components/CheckoutPage';
import Login from './components/Login';
import{getAuth, onAuthStateChanged} from 'firebase/auth'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PaymentCart from './components/PaymentCart';


function App() {
  let auth = getAuth()
  let[user,setuser] = useState(null)
  let dispatch = useDispatch()

  React.useEffect(()=>{
    onAuthStateChanged(auth,(AuthUser)=>{
      if(AuthUser){
        console.log(AuthUser)
        setuser(AuthUser)
        console.log('You are logged in!!')
        dispatch({
          type:"SETUSER",
          User:AuthUser
        })
      }
      else{
        setuser(null)
        console.log('You are logged out!!!')
      }
    })
  },[user])
  return (
    <div className="App">
      <Router>
        <Header/>
        {user?
        <Switch>
          <Route path='/payment'>
            <PaymentCart/>
          </Route>
          <Route path='/checkout'>
            <CheckoutPage/>
          </Route>
           <Route path='/'>
             <Home/>
           </Route>
        </Switch>: <Login/>}
      </Router>
    </div>
  );
}

export default App;
