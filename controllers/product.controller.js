import Product from "../models/product.model.js";

// Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const productList = await Product.findAll();
        res.status(200).json({
            success: true,
            data: productList
        });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
};

// Crear un nuevo producto
export const createProduct = async (req, res) => {
    try {
        const { name, category, description, price } = req.body;
        const newProduct = await Product.create({ name, category, description, price });
        res.status(201).json({
            success: true,
            data: newProduct
        });
    } catch (error) {
        res.status(500).json({ error: 'Error creating product' });
    }
};

// Eliminar un producto
export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByPk(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        await product.destroy();
        res.status(200).json({ success: true, message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting product' });
    }
};