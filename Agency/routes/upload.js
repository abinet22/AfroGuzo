const express = require("express");
const router = express.Router();
const db = require("../models");
const fs = require("fs");
const upload = require("../middleware/upload")

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

//TODO: implement authentication 

router.post("/upload", upload.single("file"), (req, res) => {

    try {

      console.log("file is")
      console.log(req.file)
      
        if (req.file == undefined) {
          return res.send(`You must select a file.`);
        }else {
          return res.send(req.file)
        }
      
        
        // upload the file first 

        // Image.create({
        //   type: req.file.mimetype,
        //   name: req.file.originalLname,
        //   data: fs.readFileSync(
        //     __basedir + "/resources/static/assets/uploads/" + req.file.filename
        //   ),
        // }).then((image) => {
        //   fs.writeFileSync(
        //     __basedir + "/resources/static/assets/tmp/" + image.name,
        //     image.data
        //   );
    
        //   return res.send(`File has been uploaded.`);
        // });
      } catch (error) {
        console.log(error);
        return res.send(`Error when trying upload images: ${error}`);
      }

}); // END post method 


module.exports = router;
