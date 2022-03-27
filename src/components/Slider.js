import React from 'react'
import slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components'

function Slider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };
  return (
    <Carousel {...settings}>
         <Wrap>
             <img src='/Images/Banner1.jpg'/>
         </Wrap>
         <Wrap>
             <img src='/Images/Banner2.jpg'/>
         </Wrap>
         <Wrap>
             <img src='/Images/Banner3.jpg'/>
         </Wrap>
         <Wrap>
             <img src='/Images/Banner4.jpg'/>
         </Wrap>
         <Wrap>
             <img src='/Images/Banner5.jpg'/>
         </Wrap>
         <Wrap>
             <img src='/Images/Banner6.jpg'/>
         </Wrap>
    </Carousel>
  )
}

export default Slider

let Carousel = styled(slider)`
width:100%;
  height:100vh;
  overflow:hidden;
  padding-top:50px;
`
let Wrap = styled.div`
 width:90%;
 img{
     width:100%;
     object-fit:contain;
 }
`