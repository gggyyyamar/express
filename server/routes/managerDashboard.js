const manController=require('../controllers/managerController');

module.exports= (app) =>{
  app.get('/admin/assign',manController.assignTasks);
  app.get('/admin/status',manController.viewTaskStatus);
  app.get('/admin/progress',manController.viewTaskProgress);
}