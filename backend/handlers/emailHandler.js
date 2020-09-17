import nodemailer from 'nodemailer';
import ejs from 'ejs';
import juice from 'juice';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: '2525',
  auth: { user: process.env.MAILTRAP_USER, pass: process.env.MAILTRAP_PASS }
});

const generateHTML = async (filename, options) => {
  const html = await ejs.renderFile(
    `${__dirname}/../views/email/${filename}.ejs`,
    options
  );

  // juice will inline the CSS for us in case we import CSS into our email views
  return juice(html);
};

export const sendEmail = async options => {
  const emailHtml = await generateHTML(options.filename, options);

  const mailOptions = {
    from: 'Bob <bob@email.com>',
    to: options.user.email,
    subject: options.subject,
    html: emailHtml
  };

  return transport.sendMail(mailOptions);
};

export const sendEmailSignup = (username, email) => {
  const options = {
    subject: 'Welcome to the Challange Board!',
    filename: 'signupEmail',
    user: { username, email }
  };

  sendEmail(options);
};

export const sendEmailPasswordReset = (email, resetPasswordUrl) => {
  sendEmail({
    subject: 'Password Reset for the Challenge Board',
    filename: 'resetPassEmail',
    user: { email },
    resetPasswordUrl
  });
};
