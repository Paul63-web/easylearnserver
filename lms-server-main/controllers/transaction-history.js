const axios = require('axios');

const transactionHistory = (req, res)=> {
    axios.get(`https://api.paystack.co/transaction/verify/:${reference}`).then((res)=> {
        
    }).catch((err)=> {
        console.log(err)
    })
}

module.exports = {transactionHistory}