export default function (req, res) {

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 465,     
      host: "smtp.hostinger.com",
         auth: {
              user: 'info@skyhawkkinetic.com',
              pass: 'Skyhawk@2012new',
           },
      secure: true,
    });
    
    const mailData = {
        from: 'info@skyhawkkinetic.com',
        to: 'info@skyhawkkinetic.com',
        subject: `Message From Skyhawk Kinetic Website: ${req.body.name}`,
        text: req.body.message + " | Sent from: " + 'info@skyhawkkinetic.com',
        html: `<div> Name: ${req.body.name} <p>Message:  ${req.body.message}</p> <p>Mobile no.: ${req.body.mobile}</p> </div><p>Email id: ${req.body.email}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info);
          
    })
    // console.log(req.body)    
    res.send('success')
  }