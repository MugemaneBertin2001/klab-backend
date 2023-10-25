import express  from "express";
import { createUser, viewAllUsers,getSingle } from "../controllers/UserController";

const userRoutes = express.Router();
userRoutes.post("/create", createUser)




userRoutes.get("/read",viewAllUsers)
userRoutes.get("/:id",getSingle)
export default userRoutes