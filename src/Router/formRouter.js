const { Router } = require("express");
const { contactUs, donateItemForm, donarDetail } = require("../Controller/formController");
const MulterImage = require("../Utills/MulterImage");


class FormRouter{
    router=Router()

    constructor(){
        this.postRouter()
    }

    postRouter(){
        this.router.post('/contactUs',contactUs)
        this.router.post('/donar',donarDetail)

        this.router.post('/donateItem',MulterImage.multer.array('images',2),donateItemForm)
    }
    
}

module.exports=new FormRouter().router