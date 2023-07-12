const Multer = require("multer");

const storage = Multer.diskStorage({
  destination: function (req, file, cb) {
  
    cb(null, "./src/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

class MulterImage {
  
  static multer = Multer({
    storage: storage,
    fileFilter: fileFilter,
  });
  
}

module.exports = MulterImage;
