import express from "express";
import { getAllBooks} from "../controller/books.controller.js"


const router = express.Router();

router.get("/", getAllBooks);

export default router;
