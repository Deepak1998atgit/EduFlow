import dotenv from 'dotenv';
dotenv.config();

const configKeys = {
    DB_CLUSTER_URL: process.env.DATABASE as string,

    PORT: process.env.PORT,
  
    DB_NAME: process.env.DB_NAME, 
    
    NODE_ENV: process.env.NODE_ENV as string,

    JWT_SECRET: process.env.JWT_SECRET as string,

    JWT_REFRESH_SECRET:process.env.JWT_REFRESH_SECRET as string,

    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID as string,

    TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID as string,

    TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN as string,
  
    TWILIO_SERVICE_SID: process.env.TWILIO_SERVICE_SID as string,

    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME as string,

    CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY as string,

    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET as string,
    
    FROM_EMAIL_NODE_MAILER:process.env.FROM_EMAIL as string,

    REDIS_URL:process.env.REDIS_URL as string,
    
    STRIPE_SECRET_KEY:process.env.STRIPE_SECRET_KEY  as string,

    STRIPE_PUBLISHABLE_KEY:process.env.STRIPE_PUBLISHABLE_KEY as string

}

export default configKeys;