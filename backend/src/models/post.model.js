import mongoose, { Schema } from "mongoose";

const postSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minLength: 3,
    },

    description: {
      type: String,
      required: true,
      trim: true,
      minLength: 2,
    },

    age: {
      type: Number,
      required: true,
      min: 1,
      max: 75,
    },
  },
  {
    timestamps: true,
  },
);

export const Post = mongoose.model("POST", postSchema);
