const DonateFoodForm = require("../Model/DonateFoodForm");
const ContactUs = require("../Model/FormModel");
const emailTemplate = require("../Templates/email");

class FormController {
  static async contactUs(req, res, next) {
    try {
      const data = await new ContactUs(req.body).save();
    
      emailTemplate({
        to: process.env.OWNER,
        subject: "Momeal new user details",
        contactData: {
          email: data.email,
          name: data.name,
          help_us: data.help_us,
          contact_no: data.contact_no,
          message: data.message,
        },
      });
      res.send({
        statusCode: 200,
        data: data,
        message: "data send successfully",
      });
    } catch (error) {
      next(error);
    }
  }
  static async donateItemForm(req, res, next) {
    console.log(req.files)
    try {
      // let foodimage = {
      //   food_image1: req.files[0].path,
      //   food_image2: req.files[1].path,
      // };
      // console.log(foodimage);

     const files=[]
     req.files.forEach((file)=>{
      files.push(file.path.replace(/\\/g, "/"))
     })

      const data = await new DonateFoodForm({
        ...req.body,
        images:files
      }).save();

      res.send({
        statusCode: 200,
        data: data,
        message: "data send successfully",
      });
      // emailTemplate({
      //     to: "karan.satia.143@gmail.com",
      //     subject: "Momeal new user details",
      //     contactData: {
      //         email:data.email,
      //         name:data.name,
      //         help_us:data.help_us,
      //         contact_no:data.contact_no,
      //         message:data.message
      //     },
      //   });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = FormController;
