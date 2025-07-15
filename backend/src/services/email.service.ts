import nodemailer, { TransportOptions } from 'nodemailer';

export class EmailService {
  transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: `${process.env.SMTP_HOST}`,
      port: `${process.env.SMTP_PORT}`,
      secure: false,
      auth: {
        user: `${process.env.SMTP_USER}`,
        pass: `${process.env.SMTP_PASSWORD}`,
      },
    } as TransportOptions);
  }

  async sendEmailConfirmation(to: string, link: string) {
    await this.transporter.sendMail({
      from: `${process.env.SMTP_USER}`,
      to,
      subject: 'KinoHub Registration Confirmation',
      text: '',
      html: `<div><h1>Confirm your email:</h1><a href=${process.env.SERVER_URL}/activate/${link}>Click to confirm your email</a></div>`,
    });
  }
}

export const emailService = new EmailService();
