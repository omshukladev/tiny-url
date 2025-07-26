import rateLimit from "express-rate-limit";

export const RateLimiter = rateLimit({
  // windowMs: 15 * 60 * 1000, //15 min 
  windowMs: 15 * 1000, // 15 seconds --> for testing purpose 
  max: 5,
  message: "Too many login attempts. Please try again after 15 minutes",
  standardHeaders: true,
  legacyHeaders: false,
});
