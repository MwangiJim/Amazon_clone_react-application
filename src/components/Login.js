import React, { useState } from 'react'
import styled from 'styled-components'
import { db } from '../firebase'
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { useDispatch } from 'react-redux'

function Login() {
    let auth = getAuth()
    let dispatch = useDispatch()
    let[Form,setForm] = useState({
        email:'',
        password:'',
        checked:false
    })
    function HandleInput(event){
        const {type,name,value,checked} = event.target
        setForm((prevForm)=>{
            return {
                ...prevForm,
               [name]:type === 'checkbox'?checked:value
            }
        })
    }
    function HandleForm(e){
        e.preventDefault();
        if(Form.email,Form.password){
            console.log(Form)
            signInWithEmailAndPassword(auth,Form.email,Form.password)
            .catch((error)=>{
                alert(error.message)
            })
        }
    }
    let styles = {
        display:Form.checked === true?'block':'none'
    }
  return (
    <Container>
         <LoginPad>
             <img src='/Images/Amazon_Logo.png' className='img'/>
             <button>
                 Sign In With Google
             </button>
             <button>
                 <img src='/Images/facebook.png'/>
                 Sign In with Facebook
             </button>
             <form onSubmit={HandleForm}>
                 <h3>Login</h3>
                 <label>Email-Address</label>
                 <br/>
                 <input
                  type='email'
                  placeholder='Enter Email-Address'
                  value={Form.email}
                  name='email'
                  onChange={HandleInput}
                  className= 'input'
                 />
                 <br/>
                 <label>Password</label>
                 <br/>
                 <input
                 type='password'
                 placeholder='Enter Password'
                 value={Form.password}
                 name='password'
                 onChange={HandleInput}
                 className= 'input'
                 />
                 <br/>
                 <input
                  type='checkbox'
                  onChange={HandleInput}
                  value = {Form.checked}
                  name='checked'
                 />
                 <label>I agree With the Terms & Conditions of Amazon Sales <br/>
                    Please see <a href=''>www.amazonterms and Conditions</a> <br/>
                    For Verification.Terms and Conditions Apply.
                 </label>
                 <button style={styles}>Login</button>
                 <p>No Account?<a href=''>Login</a></p>
             </form>
         </LoginPad>
    </Container>
  )
}

export default Login

let Container = styled.div`
 width:100%;
 height:100vh;
 top:0;
 z-index:150;
 left:0;
 position:fixed;
 backdrop-filter:blur(10px);
 -webkit-backdrop-filter:blur(10px);
 background-color:rgb(77,76,76,0.4);
`
let LoginPad = styled.div`
 .img{
     width:24%;
     left:40%;
     position:relative;
 }
 width:450px;
 height:500px;
 background-color:#fff;
 padding: 10px;
 border-radius:5px;
 top:50%;
 left:50%;
 position:absolute;
 transform:translate(-50%,-50%);
 button{
     width:95%;
     height:40px;
     border:none;
     outline:none;
     background-color:#ffc017;
     color:#000;
     margin:5px 8px;
     display:flex;
     justify-content:center;
     align-items:center;
     border-radius:5px;
     cursor:pointer;
     img{
         width:10px;
         margin:0 5px;
     }
 }
 form{
     h3{
         margin:10px 0;
     }
     border:1px solid gray;
     border-radius:5px;
     padding:5px;
     .input{
         width:95%;
         height:40px;
         margin:10px 0;
         border:2px solid #000;
         padding:0 10px;
         border-radius:5px;
     }
     label{
         font-weight:500;
         text-align:left;
     }
     p{
         text-align:center;
     }
 }
`