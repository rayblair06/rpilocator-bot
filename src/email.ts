import fs from 'fs';

import type { EmailClient, EmailAddressObject } from './types';
import handlebars from 'handlebars';
import nodemailer from 'nodemailer';

/**
 * 
 * Send Email Notification
 * 
 * @param emailClient 
 * @param emailAddress 
 * @param template 
 * @param data 
 */
export const sendEmail = async (emailClient : EmailClient, emailAddress: EmailAddressObject, template: string, data: object) => {
    console.log('Attempting to send notification...');

    const transporter = nodemailer.createTransport({
        host: emailClient.host,
        port: emailClient.port,
        secure: (emailClient.port === 465),
        auth: {
            user: emailClient.user,
            pass: emailClient.pass
        }
    });

    const info = await transporter.sendMail({
        from: `"${emailAddress.fromName}" <${emailAddress.fromAddress}>`,
        to: emailAddress.toAddress,
        subject: emailAddress.toSubject,
        html: renderTemplate(`${ __dirname  }/../templates/${template}`, {
            name: emailAddress.toName,
            ...data
        })
    });

    console.log('Notification sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
};

/**
 * 
 * Render HTML Template
 * 
 * @param path 
 * @param replacements 
 * @returns 
 */
const renderTemplate = (path: string, replacements = {}) => {
    const source = fs.readFileSync(path, 'utf-8').toString();
    const template = handlebars.compile(source);
    return template(replacements);
};
