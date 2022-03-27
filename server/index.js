const cors = require("cors")
const express = require("express")
const stripe = require("stripe")
("sk_test_51KedGGFodbgIbIpDJdHN9o0sC6GbiyY0vysxQHpRHMHOKP2DyJPCgl4H5wOhlkLg6AzjE1PM8fm38i7redkCaeMO00zdV2YcLY")

const uuid = require("uuid");

const app = express();

//middleware

app.use(express.json())
app.use(cors())

//routes
app.get("/",(req,res)=>{
    res.send("IT WORKS AT LEARNCODEINLINE")
})
app.post("/payment",(req,res)=>{
    const {basket,token} = req.body;
    console.log("PRODUCT",basket)
    console.log("PRICE",product.price);
    const idempotecyKey = uuid()//to avoid charging user twice

    return stripe.customers.create({
        email:token.email,
        source:token.id,
    })
    .then(customer =>{
        stripe.charges.create({
           amount:product.price * 100,
           currency:'usd',
           customer:customer.id,
           receipt_email:token.email,
           description:`${product.description}`,
           shipping:{
               name:token.card.name,
               address:{
                   country:token.card.address_country
               }
           }
        },{idempotecyKey})
    })
    .then(result =>res.status(200).json(result))
    .catch(err =>console.log(err))
})


//listen
app.listen(8282,()=> console.log("LISTENING AT PORT 8282"))