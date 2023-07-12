const Nodemailer = require("../Utills/nodemailer");

const emailTemplate = ({to,subject,contactData}) => {
  Nodemailer.sendEmail({
    to: to, // list of receivers
    subject: subject, // Subject line

    // html: `<div> <h1>${contactData.email} </h1> </div>
    // <div> <h1>${contactData.name} </h1> </div>`,
    html:`<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Form Submission Email</title>
      <style>
        body {
          font-family: Arial, sans-serif;
        }
        
        .container {
          width: 500px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f5f5f5;
        }
        
        h1 {
          color: #333333;
        }
        
        table {
          width: 100%;
          border-collapse: collapse;
        }
        
        th, td {
          padding: 10px;
          text-align: left;
          border-bottom: 1px solid #cccccc;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Form Submission</h1>
        <table>
          <tr>
            <th>Name</th>
            <td>${contactData.name}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>${contactData.email}</td>
          </tr>
          <tr>
            <th>Message</th>
            <td>${contactData.message}</td>
          </tr>
          <tr>
          <th>Contact No</th>
          <td>${contactData.contact_no}</td>
        </tr>
        <tr>
        <th>How can you help us to make world better</th>
        <td>${contactData.help_us}</td>
      </tr>
        </table>
      </div>
    </body>
    </html>
    `
  });
};
module.exports = emailTemplate;