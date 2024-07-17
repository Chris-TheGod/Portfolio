'use server';

import { validateString } from '@/lib/utils';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message');
  const senderEmail = formData.get('senderEmail');

  if (!validateString(sendEmail, 500)) {
    return {
      error: 'Invalid sender email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    };
  }

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'godgamerchris@gmail.com',
    subject: 'Message from portfolio contact form',
    reply_to: senderEmail,
    text: message,
  });
};
