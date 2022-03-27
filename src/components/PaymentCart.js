import React ,{useState}from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { Fade } from 'react-reveal'
import StripeCheckout from 'react-stripe-checkout'

function PaymentCart() {

  let {basket,user} = useSelector((state)=>state.cartProducts)
   let dispatch = useDispatch()
   function RemoveFromCart(){
     dispatch({
       type:'REMOVEFROMBASKET',
       payload:basket.id
     })
   }
   function HandleToken(addresses,token)
   {
     const body = {
       token,
       basket
     }
     const headers = {
       "Content-Type":"application/json"
     }
     return fetch(`http://localhost:8282/payment`,{
       method:"POST",
       headers,
       body:JSON.stringify(body)
     }).then(response =>{
       console.log("RESPONSE",response)
       const {status} = response;
       console.log("STATUS",status)
     })
     .catch(err =>{
       console.log(err)
     })

   }
  return (
    <Container>
       <h1>Checkout List({basket.length} {basket.length === 1?'Item':'Items'})</h1>
       <FirstRow>
           <h3>Delivery Address</h3>
           <RowInfo>
              <p>{user.email}</p>
              <p>Nairobi,Ruiru</p>
              <p>Ruiru 0(232) 0100</p>
           </RowInfo>
       </FirstRow>
       <SecondRow>
         <h2>Shopping Basket <br/>Details Confirmation</h2>
        <>
                {basket.map((cartdetail)=>{
                  return(
                    <CartComponent>
                    <img src={cartdetail.image}/>
                     <CartInfo>
                       <h3>{cartdetail.description}</h3>
                       <h5>${cartdetail.price}</h5>
                       <div className='Stars'>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </div>
                            <button onClick={RemoveFromCart}>REMOVE FROM BASKET</button>
                     </CartInfo>
                  </CartComponent>
                  )
                })}
         </>
       </SecondRow>
       <ThirdRow>
          <h3>Payment Cart</h3>
           <PayArea>
             <h2>Payment Details</h2>
               <StripeCheckout
                stripeKey='pk_test_51KedGGFodbgIbIpDv1ZC6emosRB1SeOZUo0P2hpFy8hboQ5tEAs6zEm9xyyghkqYDiG5OuetWj0m9YsqirEw1Nwe00ccvjUUnc'
                token={HandleToken}
                name='Buy Products'
                amount={basket.price * 100}
                />
           </PayArea>
       </ThirdRow>
    </Container>
  )
}

export default PaymentCart
let ThirdRow = styled.div`
 display:flex;
 justify-content:left;
 h3{
   marginn:0 5%;
 }
`
let PayArea = styled.div`
  margin-left:5%;
  h2{
    margin-bottom:15px;
  }
`
let Container = styled.div`
margin-top:100px;
 padding:60px;
 h1{
   text-align:center;
 }
`
let FirstRow = styled.div`
 display:flex;
 border-bottom: 1px solid #000;
 justify-content:left;
 h3{
   font-weight:600;
 }
`
let RowInfo = styled.div`
  text-align:left;
  line-height:20px;
  font-weight:300;
  font-size:19px;
  margin-left:5%;
  p{
    margin: 5px 0px;
  }
`
let SecondRow = styled.div`
 align-items:center;
 padding:20px 12px;
 h2{
   font-weight:400;
 }
 border-bottom:1px solid;
`
let CartComponent = styled.div`
 margin: 0 5%;
 display:flex;
 img{
   width:20%;
 }
`
let CartInfo = styled.div`
text-align:left;
.Stars{
  color:#ffc017;
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
h5{
  color:gray;
  font-weight:300;
  font-size:20px;
}
`