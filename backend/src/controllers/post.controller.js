import { Post } from "../models/post.model.js";

export const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;

    if (!name || !description || !age) {
      return res.status(400).json({ message: "complete the required fields" });
    }

    const post = await Post.create({ name, description, age });

    return res.status(201).json({
      message: "user created successfully",
      post: { id: post._id, name: post.name },
    });
  } catch (error) {
    console.log("Something went wrong", error);

    return res.status(500).json({ message: "internal server error" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ message: "complete the required fields" });
    }

    const post = await Post.findOneAndUpdate(
      { name },
      { description },
      { new: true, runValidators: true },
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
      message: "user updated successfully",
      post: { id: post._id, name: post.name, description: post.description },
    });
  } catch (error) {
    console.log("Something went wrong", error);

    return res.status(500).json({ message: "internal server error" });
  }
};

export const getPost = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "complete the required fields" });
    }

    const post = await Post.findOne({ name });

    if (!post) {
      return res.status(404).json({ message: "post not found" });
    }

    return res.status(200).json({
      message: "user data fetched successfully",
      post: { id: post._id, name: post.name, description: post.description },
    });
  } catch (error) {
    console.log("Something went wrong", error);

    return res.status(500).json({ message: "internal server error" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ message: "complete the required fields" });
    }

    const post = await Post.findOneAndDelete({ name });

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    return res.status(200).json({
      message: "user deleted successfully",
      post: { id: post._id, name: post.name, description: post.description },
    });
  } catch (error) {
    console.log("Something went wrong", error);

    return res.status(500).json({ message: "internal server error" });
  }
};
