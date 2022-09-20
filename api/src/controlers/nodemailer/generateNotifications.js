const { createTransport } = require('nodemailer')
const transportator = require('./configurations')

async function sendEmailSale(usernameSeller,emailSeller,usernameBuyer,nameProducts){
   // const transporter=createTransport(transportator)
    await transportator.sendMail({
        from: 'bgoodecommerce58@gmail.com', 
        to: emailSeller,
        subject: "NEW SALE!",
        text: `Hi! ${usernameSeller}, we inform you that ${usernameBuyer} has made a purchase of the following products: ${nameProducts}`
    },
    (error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(info)
        }
    }) 
}
async function sendClaimMail(msg,service,email){
    console.log({msg,service,email})
    await transportator.sendMail({
        from: email,
        to: 'bgoodecommerce58@gmail.com',
        subject: service,
        text: `${msg} \n ${email}`
    },
    (error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(info)
        }
    })
}
async function autoClaimRes(username,email,service){
    //const transporter=createTransport(transportator)
    await transportator.sendMail({
        from: 'bgoodecommerce58@gmail.com',
        to: email,
        subject: service,
        text: `Hello ${username}! Your claim will be answered shortly, thank you for informing us of your problem.`
    },
    (error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log(info)
        }
    })
}

module.exports={/* sendEmailAuth, */sendEmailSale,sendClaimMail,autoClaimRes}


