import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

// we know that 'auth' path is prepended to filepaths in this file
router.post("/login", login);

export default router;