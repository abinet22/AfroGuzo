const multer = require("multer");
const multerStorage = multer.memoryStorage();
const path = require("path");

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname,"./resources/static/assets/uploads/"));
  },
  filename: (req, file, cb) => {
      // TODO: send full name of the applicant so that their photo can be save with their name
    cb(null, `${Date.now()}-${req.body.fullName}`);
  },
});

var upload = multer({ storage: multerStorage, fileFilter: imageFilter });



module.exports = upload;
