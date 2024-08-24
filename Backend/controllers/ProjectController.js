const Project = require("../models/Project");
exports.create = async (req, res) => {
    try {
      // Fetch data from request body
      const {project_name,description, status, start_date, end_date, owner_id, created_at, updated_at, tags, filter, coleborator} = req.body;

        const response = await Project.create({project_name,description,  start_date, end_date, owner_id});
        res.status(200).json(
            {
                success:true,
                data:response,
                message:"Entry Created Successfully"
            }
        )
  
    } catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                success:false,
                data:"internal server error",
                message: err.message
            }
        )
    }
  };