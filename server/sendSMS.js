const AfricasTalking = require('africastalking');

// TODO: Initialize Africa's Talking
const africastalking = AfricasTalking({
    apiKey:'0b9e3865120f1df6a1fc4ed200bda7465ea820a518f73b5f1c39b434a6b56815',
    username: 'Broadsword'
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