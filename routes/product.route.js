import express from "express";
import { products } from "../controllers/product.controller.js";

const router = express.Router();

// router.get("/",(req,res) => {

//     res.status(200).json({
//         success: true,
//         date: [
//             {
//                 subject: "programacion v",
//                 description: "mi primer api",
//                 hora: "20:00 pm",
//                 semestre: "7",
//                 date: new Date().toDateString(),
//             }
//         ]
//     })
// });

router.get("/",products)
export default router;