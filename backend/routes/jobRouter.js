import express from "express";
import { getAllJobs, getSinglejob, getmyJobs, postJob,} from "../controllers/jobController.js";
import {isAuthorized} from "../middlewares/auth.js";


const router = express.Router();
router.get("/getall", getAllJobs);  
router.post("/post", isAuthorized, postJob);   
router.get("/getmyjobs", isAuthorized, getmyJobs);  
router.get("/:id", isAuthorized, getSinglejob);    


export default router;