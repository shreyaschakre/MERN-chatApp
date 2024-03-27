import  express  from "express";
import { sendMesasge } from "../controllers/message.controller.js";
import { getMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/protectRoute.js" 

const router = express.Router()

router.get("/:id",protectRoute,getMessage)
router.post("/send/:id",protectRoute,sendMesasge)

export default router