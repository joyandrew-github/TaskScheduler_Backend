import dotenv from 'dotenv';

dotenv.config();

export default {
    ENV: process.env.ENV || 'development',
    PORT: process.env.PORT || 5000,
    SERVER_URL: process.env.SERVER_URL || `http://localhost:${process.env.PORT || 5000}`,
    DATABASE_URL: process.env.DATABASE_URL,
    CLIENT_URL: process.env.CLIENT_URL || 'http://localhost:3000'
};
