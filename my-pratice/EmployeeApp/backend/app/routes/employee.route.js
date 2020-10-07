var express = require("express");
const router = express.Router();
expressValidator = require("express-validator");
var employeeController = require("../controller/employee.controller");
var multer  = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      console.log(file);
      var filetype = '';
      
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, 'image-' + Date.now() + '.' + filetype);
    }
});

var upload = multer({storage: storage});
router.use(expressValidator());
router.post("/",upload.single('file'), employeeController.create);
router.get("/", employeeController.get);
router.get("/:id", employeeController.getById);
router.put("/",upload.single('file'), employeeController.update)
router.delete("/:id", employeeController.delete);
router.post("/search", employeeController.getByName)
module.exports = router;