import Product from "../models/product.model.js";

export const products =  async (resq, res) =>{
    const productList= await Product.findAll();
    
        res.status(200).json({
        success: true,
        data: productList
        
    });
};
 