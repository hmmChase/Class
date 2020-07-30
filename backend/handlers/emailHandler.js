const nodemailer = require('nodemailer');
const ejs = require('ejs');
const juice = require('juice');

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

exports.sendEmail = async options => {
  const emailHtml = await generateHTML(options.filename, options);

  const mailOptions = {
    from: 'Bob <bob@email.com>',
    to: options.user.email,
    subject: options.subject,
    html: emailHtml
  };

  return transport.sendMail(mailOptions);
};
