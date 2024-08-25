const Project = require("../models/Project");


exports.createProject = async (req, res) => {
    try {
      // Fetch data from request body
      const {project_name,description,owner_id, tags, filter} = req.body;

        const response = await Project.create({project_name,description,owner_id,tags,filter});
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