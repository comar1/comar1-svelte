//import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

console.log('Help :/');

// export const POST = async ({ request }) => {
//  const { from, email, message } = request.body;

//  //Create a Nodemailer transporter using Gmail
//  const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     host: 'smtp.gmail.com',
//     port: '587',
//     auth: {
//       user: process.env.GMAIL_USERNAME,
//       pass: process.env.GMAIL_PASSWORD
//     }
//  });

//  // Define the email options
// const mailOptions = {
//     from: {
//         name: from,
//         address: email,
//     },
//     to: 'officialfranciscomar2@gmail.com', // Your Gmail address
//     subject: 'New Message from Contact Form',
//     text: message
// };

// async (transporter, mailOptions) => {
// // Send the email
//     try {
//         await transporter.sendMail(mailOptions);
//         return { status: 200, body: { success: true } };
//     } catch (error) {
//         console.error(error);
//         return { status: 500, body: { success: false } };
//     }
// }
   
// console.log(transporter, mailOptions);
// }

//sendMail(transporter, mailOptions);