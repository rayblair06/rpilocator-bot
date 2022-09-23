import { parse } from './parser';
import { sendEmail } from './email';
import { scheduler } from './scheduler';
import config from './config';

const runScheduler: boolean = (config.SCHEDULER === 'true');
const feedUrl: string = config.FEED_URL;

const main = async () => {
  console.log('Task starting...');
        
  const output = await parse(feedUrl);
  
  sendEmail(
    {
      host: config.MAIL_HOST,
      port: parseInt(config.MAIL_PORT as string, 10),
      user: config.MAIL_USER,
      pass: config.MAIL_PASS,
    },
    {
      toName: config.EMAIL_NAME,
      toAddress: config.EMAIL_ADDRESS,
      toSubject: config.EMAIL_SUBJECT,
      fromName: config.FROM_EMAIL_NAME,
      fromAddress: config.FROM_EMAIL_ADDRESS,
    },
    'email.html',
    output
  );

  console.log('Task finished');
}

/**
 * Execute our operation async
 */
(async () => {
  
  if (runScheduler) {
    console.log('Scheduler starting...');

    scheduler(
      main,
      60 * 60 * 24 // Once a day
    );
  } else {
    main()
  }
})();
