import express  from "express";
import { createUser, viewAllUsers } from "../controllers/UserController";

const userRoutes = express.Router();
userRoutes.post("/create", createUser)
userRoutes.get("/users",viewAllUsers)
export default userRoutes