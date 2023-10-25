import Student from "../models/UserModel";


// createUser
export const createUser = async (req,res)=>{

    try {
        const {firstName,lastName,dateOfBirth,email} = req.body
        const makeUser = await Student.create({firstName,lastName,dateOfBirth,email});
        return res.status(201).json({
            status: "201",
            message: "Success To create User",
            data:makeUser
        })
        
    } catch (error) {
        return res.status(500).json({
            status: "500",
            message: "Failed To create User",
            error: error.message
        })
        
    }
}

export const viewAllUsers = async(req,res)=>{
    try {
        const users = await Student.find();
        return res.status(200).json({
            status: "200",
            message: "List found",
            data:users
        })
        
        
    } catch (error) {
        return res.status(500).json({
            status: "500",
            message: "Failed To retrieve Users",
            error: error.message
        }) 
    }

}
export const getSingle = async(req,res)=>{
    try {
        const {id}=req.params
        const users = await Student.findById(id);
        if(!users){
            return res.status(404).json({
                status: "404",
                message: "ID Not Found",
                // data:users
            })  
        }
        return res.status(200).json({
            status: "200",
            message: "Single User found",
            data:users
        })
        
        
    } catch (error) {
        return res.status(500).json({
            status: "500",
            message: "Failed To retrieve Users",
            error: error.message
        }) 
    }

}