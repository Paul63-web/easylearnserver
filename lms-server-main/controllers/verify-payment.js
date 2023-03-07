const axios = require('axios');

const verifyPayment = async (req, res) => {
 console.log(req.body.reference)
    try {
     let check=  await  axios.get(`https://api.paystack.co/transaction/${req.body.reference}`, {
        headers: {
            authorization: `Bearer sk_test_2b568629f54f9f5444ce1b73134f023177534134`,
            "content-type": "application/json",
            "cache-control": "no-cache"
        }
    }) 
    console.log(respoonse)
    } catch (error) {
        console.log(error)
    }
    // console.log(req.body.reference)
    // axios.get(`https://api.paystack.co/transaction/verify/${req.body.reference}`, {
    //     headers: {
    //         authorization: `Bearer ${process.env.PAYMENT_SECRET_KEY}`,
    //         "content-type": "application/json",
    //         "cache-control": "no-cache"
    //     }
    // }).then((res)=> {
    //     // console.log(req.body);
    //     console.log("hello");
    // }).catch((err)=> {
    //     console.log(err)
    // })
}

module.exports = {verifyPayment}