import mongoose from "mongoose";
// Define the Student schema
const studentSchema = new mongoose.Schema({
    firstName: {type:String,require:true},
    lastName: {type:String,require:true},
    dateOfBirth: {type:Date,require:true},
    email:{type:String,require:true},
});

// Create the Student model
const Student = mongoose.model('Student', studentSchema);

export default  Student;
