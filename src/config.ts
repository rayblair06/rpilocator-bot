import * as dotenv from 'dotenv';

dotenv.config();

/**
 * dotenv .env variables
 */
export default {
    MAIL_HOST: process.env.MAIL_HOST ?? '',
    MAIL_PORT: process.env.MAIL_PORT ?? '',
    MAIL_USER: process.env.MAIL_USER ?? '',
    MAIL_PASS: process.env.MAIL_PASS ?? '',
    EMAIL_NAME: process.env.EMAIL_NAME ?? '',
    EMAIL_ADDRESS: process.env.EMAIL_ADDRESS ?? '',
    EMAIL_SUBJECT: process.env.EMAIL_SUBJECT ?? '',
    FROM_EMAIL_NAME: process.env.FROM_EMAIL_NAME ?? '',
    FROM_EMAIL_ADDRESS: process.env.FROM_EMAIL_ADDRESS ?? '',
    FEED_URL: process.env.FEED_URL ?? ''
}
