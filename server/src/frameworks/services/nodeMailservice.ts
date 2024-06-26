import nodemailer, { Transporter } from 'nodemailer';
import configKeys from '../../../config';

export const nodeMailService = () => {
    // Create a transporter using SMTP
    const transporter: Transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.GOOGLE_ACCOUND,
            pass: process.env.GOOGLE_NODEMAILER_PASSWORD,
        },
    });


    const sendPassword = async (generatedPassword: string) => {
        // Other email options
        const mailOptions = {
            from: 'deepaksanjeev1998@gmail.com',
            to: 'deepakvs2022@gmail.com',
            subject: 'Your Password for Eduflow',
            text: generatedPassword,
        };

        // Send password to email
        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Email sent For the Generated Password:', info.response);
            }
        });
    }


    const sendEmail = (email: string, subject: string, text: string) => {
        const mailOptions = {
            from: configKeys.FROM_EMAIL_NODE_MAILER,
            to: email,
            subject: subject,
            text: text,
        };
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    };



    return {
        sendPassword,
        sendEmail
    }

};

export type NodeMailService = typeof nodeMailService;