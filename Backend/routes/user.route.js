import express from "express";
import { SignInUser, createUser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", createUser);
router.post("/signin", SignInUser);

export default router;
