
const dotenv = require('dotenv')
const AfricasTalking = require('africastalking');


// Config dotenv
dotenv.config()

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
    apiKey: process.env.AT_KEY,
    username: process.env.AT_USERNAME
})



module.exports = async function sendSMS(number, message) {
    
    // TODO: Send message
    
    try{
        const result = await africastalking.SMS.send({
            to: [`+${number}`],
            message: message,
            
        });
        console.log(result);
    }
    catch(error){
        console.error("Error", error);
    }

};