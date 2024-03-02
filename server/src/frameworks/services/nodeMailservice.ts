import nodemailer from 'nodemailer';

export const nodeMailService = () => {
    const sendPassword = async (generatedPassword:string) => {
        // Create a transporter using SMTP
        const transporter = await nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user:process.env.GOOGLE_ACCOUND,
                pass:process.env.GOOGLE_NODEMAILER_PASSWORD, 
            },
        });

        // Other email options
        const mailOptions = {
            from: 'deepaksanjeev1998@gmail.com',
            to: 'deepakvs2022@gmail.com',
            subject: 'Your Password for Eduflow',
            text:generatedPassword,
        };

        // Send email
       await  transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error('Error:', error);
            } else {
                console.log('Email sent For the Generated Password:', info.response);
            }
        });
    }

    return {
        sendPassword
    }

};

export type NodeMailService = typeof nodeMailService;