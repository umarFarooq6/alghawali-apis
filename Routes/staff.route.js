const express = require('express');
const router = express.Router();
const staffController = require('../controllers/staffController');
const verifyStaffToken = require("../middlewears/verifyStaffToken");
const upload = require("../middlewears/uploadMiddlewear")
const roles = require("../config/roles")
const checkPermission = require("../middlewears/checkPermission")

router.post('/', verifyStaffToken, checkPermission(roles.ShowAccessOnAddStaff),  upload.single("staffImage"), staffController.createStaff);
router.get('/', verifyStaffToken,  checkPermission(roles.ShowAccessOnAddStaff), staffController.getAllStaff);
router.post('/login', staffController.loginStaff)
router.get('/:id', verifyStaffToken, checkPermission(roles.ShowAccessOnAddStaff), staffController.getStaffById);
router.put('/:id', verifyStaffToken, checkPermission(roles.ShowAccessOnAddStaff), upload.single("staffImage"), staffController.updateStaffById);
router.delete('/:id', verifyStaffToken, checkPermission(roles.ShowAccessOnAddStaff), staffController.deleteStaffById);

module.exports = router;
