const { Router } = require("express");
const { contactUs, donateItemForm } = require("../Controller/formController");
const MulterImage = require("../Utills/MulterImage");


class FormRouter{
    router=Router()

    constructor(){
        this.postRouter()
    }

    postRouter(){
        this.router.post('/contactUs',contactUs)

        this.router.post('/donateItem',MulterImage.multer.array('food_image1',2),donateItemForm)
    }
    
}

module.exports=new FormRouter().router