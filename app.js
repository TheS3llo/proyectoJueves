import express from "express";
import cors from "cors";
import productRouter from "./routes/products.route.js";

const app = express();
const port = process.env.PORT ||3000;

app.use(express.json());
app.use(cors());
app.use(express.static("public"));

app.use("/products", productRouter);

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});

// app.get("/products",(req, res) => {
//     res.json({
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
