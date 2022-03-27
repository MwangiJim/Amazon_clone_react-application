import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'

function Product(props) {
    let {basket} = useSelector((state)=> state.cartProducts)
    //console.log(basket)
    let dispatch = useDispatch()
    function AddtoCart(){
        dispatch({
            type:'ADD_TO_BASKET',
            payload:{
                id:props.id,
                description:props.description,
                price:props.price,
                image:props.image,
            }
        })
    }
  return (
    <Container>
        <h2>{props.description}</h2>
        <p>${props.price}</p>
        <div className='Stars'>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
            <FontAwesomeIcon icon={faStar}/>
        </div>
        <img src={props.image}/>
        <button onClick={AddtoCart}>ADD TO CART</button>
    </Container>
  )
}

export default Product

let Container = styled.div`
 padding:25px 17px;
 background-color:#fff;
 width:100%;
 height:53vh;
 box-shadow:0 0 2px 2px;
 border-radius:5px;
 margin: 0 8px;
 transition:0.5s;
 h2{
     font-weight:600;
     font-size:20px;
 }
 p{
     font-size:17px;
     font-weight:500;
 }
 .Stars{
     text-align:left;
     color:#ffc017;
     display:flex;
     justify-content:center;
 }
 img{
     width:45%;
     height:200px;
     object-fit:contain;
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
 :hover{
     box-shadow:0 0 4px 4px #000;
 }
`