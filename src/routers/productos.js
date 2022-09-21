import {Router} from "express";
import {controller} from "../controller/products.js";

export const prodRouter = Router();

prodRouter.get("/:engine", (req,res) => controller.get(req,res))

prodRouter.get("/:engine/:id", (req,res) => controller.getByID(req,res))

prodRouter.post("/", (req,res)=> controller.post(req,res))

