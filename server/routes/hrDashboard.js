const hrController= require('../controllers/hrControllers');

module.exports= (app) =>{
  app.get('/admin2',hrController.showEmployeeDetails);
  app.get('/admin2/registerDetails',hrController.registerEmployeeDetails);
}