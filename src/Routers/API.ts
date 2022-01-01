import express, { Router } from "express";

const APIRouter = Router();

APIRouter.get("/skills", (req, res) => {
  res.json({ msg: "skills" });
});

APIRouter.get("/projects", (req, res) => {
  res.json({ msg: "projects" });
});

export default APIRouter;
