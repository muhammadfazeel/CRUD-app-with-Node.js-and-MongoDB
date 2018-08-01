var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/addRecord',usersController.addRecord);
router.put('/:id/UpdateRecord',usersController.UpdateRecord);
router.delete('/:id/DeleteRecord',usersController.DeleteRecord);
router.get('/:id/ReadRecord',usersController.ReadRecord);
module.exports = router;
