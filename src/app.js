import express from "express";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import mongoose from "mongoose";
const app = express();

// middleware
app.use(express.json());

// router
app.use("/api", productRouter);
app.use("/api", authRouter);
// server
mongoose.connect("mongodb://127.0.0.1:27017/we17307");
export const viteNodeApp = app;

// npm i vite vite-plugin-node -D
// tạo file vite.config.js
