// src/routes/api/sendmail.js
// export async function post(request) {
//     // Your logic to handle the POST request
//     console.log('request sent');
//     return {
//        status: 200,
//        body: { success: true }
//     };
//}
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();
  
console.log('request sent');

export default async function post(request) {
 const { from, email, message } = request.body;

 //Create a Nodemailer transporter using Gmail
 const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: '587',
    auth: {
      user: process.env.GMAIL_USERNAME,
      pass: process.env.GMAIL_PASSWORD
    }
 });

 // Define the email options
const mailOptions = {
    from: {
        name: from,
        address: email,
    },
    to: 'officialfranciscomar2@gmail.com', // Your Gmail address
    subject: 'New Message from Contact Form',
    text: message
};

    try {
        await transporter.sendMail(mailOptions);
        return { status: 200, body: { success: true } };
    } catch (error) {
        console.error(error);
        return { status: 500, body: { success: false } };
    }
}

// //sendMail(transporter, mailOptions);