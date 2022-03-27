import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationCrosshairs, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import{useHistory} from 'react-router-dom'
import { getAuth } from 'firebase/auth'

function Header() {
  let {basket,user} = useSelector((state) => state.cartProducts)
  //console.log(basket.length)(
    let history = useHistory();
    let auth = getAuth()
  return (
    <Navbar>
        <Container>
       <img src ='/Images/Amazon_Logo.png' onClick={e => history.push('/')}/>
        <div className='location'>
            <FontAwesomeIcon icon={faLocationCrosshairs} className = 'loc'/>
            <div className='locinfo'>
                <p>Hello</p>
                <h4>Nairobi,Kenya</h4>
            </div>
        </div>
        <InputSection>
          <input
           placeholder='Search'
           type='text'
          />
          <FontAwesomeIcon icon={faSearch} className='search'/>
        </InputSection>
        <Col1>
          <p>Hello {user ? user.email:'Guest'}</p>
          <button onClick={()=>auth.signOut()}>LOGOUT</button>
        </Col1>
        <Col1>
         <p>Return</p>
         <h4>& Orders</h4>
        </Col1>
        <Col1>
         <p>Your</p>
         <h4>Prime</h4>
        </Col1>)
         <Col2 onClick={e => history.push('/checkout')}>
            <FontAwesomeIcon icon={faShoppingCart} className='shopping'/>
            <p>{basket.length}</p>
          </Col2>
      </Container>
      <Links>
         <li>All</li>
         <li>Best Seller</li>
         <li>Mobiles</li>
         <li>Price</li>
         <li>Electronic</li>
         <li>Fashion</li>
         <li>New Releases</li>
         <li>Customer Service</li>
         <li>Amazon Pay</li>
         <li>Computers</li>
         <li>Home & Kitchen</li>
         <li>Today's Deals</li>
      </Links>
    </Navbar>

  )
}

export default Header

let Navbar = styled.div`
width:100%;
top:0;
left:0;
z-index:100;
padding:0;
position:fixed;
`
let Links = styled.div`
background-color:#333;
display:flex;
padding:4px 0;
 li{
     display:inline:block;
     padding:8px 12px;
     list-style:none;
     position:relative;
     color:#fff;
 }
`
let Container = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 background-color:#000;
 img{
     width:10%;
     filter:invert(1);
     cursor:pointer;
 }
 .location{
     color:#fff;
     display:flex;
     justify-content:center;
     align-items:center;
     .locinfo{
        display:block;
        text-align:left;
     }
     .loc{
         font-size:18px;
     }
 }
`
let InputSection = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 width:700px;
 height:42px;
 background-color:#fff;
 border-radius:5px;
 overflow:hidden;
 input{
     background:transparent;
     height:42px;
     width:700px;
     outline:none;
     border:none;
     padding: 0 15px;
 }
 .search{
     color:#000;
     font-size:19px;
     background-color:#ffc017;
     padding:12px 16px;
 }
`
let Col1 = styled.div`
 color:#fff;
 button{
   background-color:transparent;
   color:#fff;
   padding:8px 15px;
   cursor:pointer;
   outline:none;
   border:none;
   font-weight:600;
 }
 text-align:left;
 p{
     font-size:12px;
 }
`
let Col2 = styled.div`
 display:flex;
 justify-content:center;
 color:#fff;
 margin-right:15px;
 cursor:pointer;
.shopping{
    margin:0 5px;
}
`