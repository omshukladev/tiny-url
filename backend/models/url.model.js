import mongoose from "mongoose";

const urlSchemma = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
  },
  clickCount: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

export const Url = mongoose.model("Url", urlSchemma);