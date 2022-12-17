// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');
export default async (req, res) => {
     try {
         const transporter = nodemailer.createTransport({
             service: 'gmail',
             auth: {
                 user: `${process.env.EMAIL_ADDRESS}`,
                 pass: `${process.env.GENERATED_EMAIL_APP_PASSWORD}`
             }
         });

         const mailOptions = {
             from: `${process.env.EMAIL_ADDRESS}`,
             to: `${process.env.EMAIL_ADDRESS}`,
             subject: 'Message from portfolio for new project',
             text: `Message from ${req.body.email}: ${req.body.text}`
         };

         transporter.sendMail(mailOptions, (err, response) => {
             if(err) {
                 console.error('Something went wrong', err);
             } else {
                 res.status(200).json('Email sent successfully.')
             }
         })
     } catch (error) {
         res.status(500).json(error);
     }
}