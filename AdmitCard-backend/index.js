const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { Vonage } = require('@vonage/server-sdk')

const app = express()
const port = process.env.port || 9000

app.use(bodyParser.json())

const corsOptions = {
    origin: 'http://localhost:3000',
}
  
app.use(cors(corsOptions));

const apiKey = "f4e9c62c"
const apiSecret = "yMyRnhAQcPnRKf0i"

const vonage = new Vonage({
  apiKey,
  apiSecret
})

const generateOTP = () => Math.floor(1000 + Math.random() * 9000);

const otps = {}

app.post('/generateotp', (req, res) => {  
    const otp = generateOTP().toString()
    const { phoneNumber } = req.body
    
    const from = "Vonage APIs"
    const to = phoneNumber
    const text = `Your OTP to login is ${otp}`
    
    otps[phoneNumber] = otp

    async function sendSMS() {
        await vonage.sms.send({to, from, text})
            .then(resp => { res.status(200).send(resp); console.log('Message sent successfully'); console.log(resp); })
            .catch(err => { res.status(400).send(err); console.log('There was an error sending the messages.'); console.error(err); });
    }

    sendSMS();
})

app.post('/verifyotp', (req, res) => {
    const {phoneNumber, otp} = req.body

    if(otps[phoneNumber] === otp){
        delete otps[phoneNumber]
        res.status(200).send({message: "OTP verified Succesfully"})
    }
    else{
        res.status(201).send({message: "You've entered incorrect PIN"})
    }

})

app.listen(port, () => {
    console.log(`server is running at port ${port}`)   
})