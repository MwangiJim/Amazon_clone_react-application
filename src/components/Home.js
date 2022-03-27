import React from 'react'
import Slider from './Slider'
import styled from 'styled-components'
import Product from './Product'
import ProductDisplay from './CheckoutPage'
function Home() {
  return (
    <Container>
      <Slider/>
      <Row>
        <Product
          id = "112342"
          description = '44 Inch HD Display Television'
          price = {100}
          image = '/Images/arrival-1.jpg'
          rating = {3}
        />
        <Product
         id = "112342"
         description = 'HP Laptop 8gb RAM 500GB SSD i5 core Processor'
         price = {750}
         image = '/Images/arrival-2.jpg'
         rating = {4}
        />
      </Row>
      <Row>
        <Product
         id = '112342'
         description = 'ITEL S8 2GB 16GB'
         price = {78}
         image = '/Images/arrival-3.jpg'
        />
        <Product
         id = '112342'
         description = 'HP Printer Colors(Variety) Wifi Connect'
         price = {130}
         image = '/Images/arrival-4.jpg'
        />
        <Product
         id = '112342'
         description = 'High Bass Boost Head Phones'
         price = {8}
         image = '/Images/arrival-5.jpg'
        />
      </Row>
      <Row>
        <Product
          id = '112342'
          description = 'Amazon BlueTooth Speaker'
          price = {10}
          image = '/Images/arrival-6.jpg'
        />
        <Product
          id = '112342'
          description = '64 Inch WideScreen HD Television(With Hooks) For Gaming Crystal Water Display'
          image = '/Images/cat_img1.png'
          price = {2540}
        />
      </Row>
      <Row>
        <Product
          id = '112342'
          description = 'Samsung A02S 3GB 32GB 5000Mph Crystal Water 6.2 Inch Screen'
          price = {120}
          image = '/Images/cat_img2.png'
        />
        <Product
         id = '112342'
         description = 'Peach HeadPhones Clear Crystal TRebble'
         price = {12}
         image = '/Images/cat_img3.png'
        />
        <Product
         id = '112342'
         description = 'Iphone Bluetooth Watch Split Second Chronogragh'
         price = {25000}
         image = '/Images/cat_img4.png'
        />
        <Product
         id = '112342'
         description = 'Xbox 360 Gamepad Wireless Dual Shock'
         price = {15}
         image = '/Images/cat_img5.png'
        />
      </Row>
      <Row>
        <Product
          id = '112342'
          description = 'SONY Camera'
          price = {250}
          image = '/Images/cat_img6.png'
        />
        <Product
         id = '112342'
         description = 'Bluetooth Speaker(With Alexa)'
         price = {90}
         image = '/Images/cat_img7.png'
        />
        <Product
          id = '112342'
          description = 'Infinix Note 7 6,5 Inch Screen 4GB 64GB 3900Mah'
          price = {140}
          image = '/Images/product-1.jpg'
        />
      </Row>
      <Row>
        <Product
         id = '112342'
         description = 'SONY XPERIA CAMERA'
         price = {500}
         image = '/Images/product-2.jpg' 
        />
        <Product
         id = '112342'
         description = 'Nokia A10 6,3 Wide Screen 4gb 64gb 4500Mah Battery'
         price = {340}
         image = '/Images/product-8.jpg'
        />
        <Product
         id = '112342'
         description = 'Blutooth Speaker (Samsung)'
         price = {90}
         image = '/Images/product-4.jpg'
        />
        <Product
         id = '112342'
         description = 'Time Display(weather updates Included(With Alexa)'
         price = {50}
         image = '/Images/product-5.jpg'
        />
      </Row>
      <Row>
        <Product
         id = '122342'
         description = 'Smart Watch Patek Philippe'
         price = {100000}
         image = '/Images/product-6.jpg'
        />
        <Product
         id = '122342'
         description = 'Slim HeadPhones (Adjustable To any Size)'
         price = {7}
         image = '/Images/product-7.jpg'
        />
         <Product
          id = '122342'
          description = 'CCTV Camera With Stand Attachable to any terrain'
          price = {140}
          image = '/Images/product-9.jpg'
        />
      </Row>
      <Row>
         <Product
         id = '122342'
         description = '55 Inch Wide Screen Samsung Curved HD Display Crystal Drop Screen'
         price = {640}
         image = '/Images/product-3.jpg'
        />
      </Row>
    </Container>
  )
}

export default Home

let Container = styled.div`
 
`
let Row = styled.div`
 display:flex;
 justify-content:space-evenly;
 margin: 15px 5px;
`
