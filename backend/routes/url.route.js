import { Router } from "express";
// import { RateLimiter } from "../middlewares/rateLimitter.middleware.js";
import { shortenUrl ,redirectUrl} from "../controllers/url.controller.js";



const router = Router();

router.post("/short", shortenUrl);
router.get("/:shortUrl", redirectUrl);

export default router;
