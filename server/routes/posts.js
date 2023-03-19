import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts); // displays posts for user feed
router.get("/:userId/posts", verifyToken, getUserPosts); // displays posts when on page for specific user

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost); // for liking/unliking posts

export default router;