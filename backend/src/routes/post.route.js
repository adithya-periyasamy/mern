import { Router } from "express";
import {
  createPost,
  deletePost,
  getPost,
  updatePost,
} from "../controllers/post.controller.js";

const router = Router();

router.route("/create").post(createPost);
router.route("/read").post(getPost);
router.route("/update").patch(updatePost);
router.route("/delete").delete(deletePost);

export default router;
