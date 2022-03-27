import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Zoom,Fade } from 'react-reveal'
import {useHistory} from 'react-router-dom'

function CheckoutPage() {
    let {basket,user} = useSelector((state) => state.cartProducts)
    let history = useHistory()                  
    let dispatch = useDispatch()
    function RemoveFromCart(){
        console.log('Removed')
        dispatch({
            type:'REMOVEFROMBASKET',
            payload:basket.id,
        })
    }   
  return (
    <Container>
        <LeftSide>
           <img src='/Images/Banner4.jpg'/>    
           <h2>Your shopping Basket</h2>
           <h3>{user.email}</h3>
           <>
             {basket.map((cartdetail)=>{
                 return (
                     <CartDetail>
                         <Fade left>
                        <img src={cartdetail.image}/>
                        <CartInfo>
                            <h2>{cartdetail.description}</h2>
                            <p>${cartdetail.price}</p>
                            <div className='Stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <button onClick={RemoveFromCart}>REMOVE FROM BASKET</button>
                        </CartInfo>
                        </Fade>
                     </CartDetail>
                 )
             })}
           </>
        </LeftSide>
        <RightSide>
            <p>Shopping Cart({basket.length} {basket.length === 1?'Item':"Items"}):<strong>${2000}</strong></p>
            <input
             type='checkbox'
            />
            <label>Does the purchase contain a gift?</label>
            <button onClick={(e)=>history.push('/payment')}>Proceed to Checkout</button>
        </RightSide>
    </Container>
  )
}

export default CheckoutPage

let Container = styled.div`
 display:flex;
 justify-content:center;
 margin-top:110px;
 padding-left:30px;
`
let LeftSide = styled.div`
 flex-basis:70%;
 img{
     width:90%;
     object-fit:contain;
 }
`
let RightSide = styled.div`
  flex-basis:30%;
  background-color:#f4f4f4;
  height:20vh;
  width:100%;
  padding:20px;
  input{
      margin:12px 0 30px;
  }
  button{
    padding:8px 35px;
    background-color:#ffc017;
    color:#000;
    outline:none;
    border:1px solid #000;
    cursor:pointer;
    border-radius:5px;
  }
`
let CartDetail = styled.div`
 display:flex;
 align-items:center;
 img{
     width:25%;
     object-fit:contain;
     flex:0.2;
 }
 justify-content:left;
`
let CartInfo = styled.div`
 text-align:left;
 flex:0.8;
 margin:0 10px;
 p{
     font-weight:300;
     font-size:40px;
     margin:10px 0;
     color:gray;
 }
 button{
     background-color:#ffc017;
     padding:8px 30px;
     cursor:pointer;
     color:#000;
     outline:none;
     border-radius:5px;
     outline:none;
     border:none;
     margin:5px 0;
 }
 .Stars{
     color:#ffc017;
 }
`