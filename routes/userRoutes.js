const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.post('/', controller.createUser);
router.get('/', controller.getAllUsers);
router.get('/:id', controller.getUserById);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);
router.put('/:id/assign-plan/:planId', controller.assignPlan);
router.get('/:id/plan', controller.getUserPlan);
router.get('/:id/activities', controller.getUserActivities);

module.exports = router;
