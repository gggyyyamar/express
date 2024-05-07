const db= require('../config/database');

exports.assignTasks= async (req,res)=>{
  if (req.session.user){
    if (req.session.role =="employee") {
      var emp_Id = req.body.emp_id;
      var taskname = req.body.Taskname
      var taskId = req.body.TaskID
     
       let params = {
        emp_Id: emp_Id ,
        taskName: Taskname,
        taskId: TaskID,
        
       }
    }
  }
  db.query('insert into tasks set?',params,(err, result)=> {
    if (err){
      console.log(err)
    }
    else{
      if (result.length === 0){
        res.send("No data found!");}
    else{
      res.render=('.layouts/assignTasks',{
        sampleData: result
      });
    }
  }
  })

}

exports.viewTaskStatus = async (req, res) => {
  const taskStatus = req.query.status; 
  
  let query = `SELECT * FROM tasks`;

  if (taskStatus === 'accepted' || taskStatus === 'rejected') {
    query += ` WHERE task_status = '${taskStatus}'`;
  }

  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
      res.send("An error occurred while fetching data.");
    } else {
      if (result.length === 0) {
        res.send("No data found!");
      } else {
        res.render('.layouts/taskStatus', {
          sampleData: result
        });
      }
    }
  });
};
