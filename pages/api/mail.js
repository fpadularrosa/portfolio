// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
require('dotenv').config()
const mail = require('@sendgrid/mail');
mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
  const {name, email, project} = req.body
    const mailData = {
      to: 'francofyzz15@gmail.com',
      from: 'francofyzz15@gmail.com',
      subject: `Message From ${name}`,
      text: project,
      html: project.replace(/\r\n/g, '<br />')
     }
     await mail.send(mailData);
     res.status(200).json({ status: 'OK' });
}