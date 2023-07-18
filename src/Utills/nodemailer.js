const nodemailer = require("nodemailer");

class Nodemailer {
  static async testAccount() {
    return await nodemailer.createTestAccount();
  }
  static initialize() {
    console.log(Nodemailer.testAccount(), "initializer");
    return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user:process.env.EMAIL_USER, // generated ethereal user
        pass: process.env.PASS_USER, // generated ethereal password
      },
    });
  }
  static sendEmail({ to, subject, html }) {
    console.log(Nodemailer.initialize(), "send email");
    return Nodemailer.initialize().sendMail({
      from: process.env.EMAIL_USER, // sender address
      to: to, // list of receivers
      subject: subject, // Subject line

      html: html, // html body
    });
  }
}
module.exports = Nodemailer;