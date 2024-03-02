import dotenv from 'dotenv';
dotenv.config();

const configKeys = {
    DB_CLUSTER_URL: process.env.DATABASE as string,

    PORT: process.env.PORT,
  
    DB_NAME: process.env.DB_NAME, 
    
    NODE_ENV: process.env.NODE_ENV as string,

    JWT_SECRET: process.env.JWT_SECRET as string,

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,

    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID as string,

    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN as string,
  
    TWILIO_SERVICE_SID: process.env.TWILIO_SERVICE_SID as string,
}

export default configKeys;