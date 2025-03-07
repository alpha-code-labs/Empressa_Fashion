const Category = require("../models/category.model");
const Product = require("../models/product.model");
const collectionService = require("../services/collection.service");

async function createProduct(reqData) {
  try {
    let level = await Category.findOne({ name: reqData.productCategory });
    if (!level) {
      const newLevel = new Category({
        name: reqData.productCategory,
      });
      level = await newLevel.save();
    }

    let collectionId = await collectionService.getCollectionIdByName(reqData.collectionName);


    const product = new Product({
      title: reqData.title,
      color: reqData.color,
      description: reqData.description,
      material: reqData.material,
      SKU: reqData.SKU,
      neck_type: reqData.neck_type,
      sleeve_style: reqData.sleeve_style,
      collections: reqData.collections,
      modelAttireDescription: reqData.modelAttireDescription,
      discountedPrice: reqData.discountedPrice,
      imageUrl: reqData.imageUrl,
      brand: reqData.brand,
      price: reqData.price,
      sizes: reqData.size,
      category: level._id,
      collections: collectionId,
      defaultImageIndex: reqData.defaultImageIndex??0,
    });

    const savedProduct = await product.save();

    return savedProduct;
  } catch (error) {
    throw new Error("Error creating product: " + error.message);
  }
}

async function deleteProduct(productId) {
  try {
    const product = await findProductById(productId);
    if (!product) {
      throw new Error("Product not found with id: " + productId);
    }
    await Product.findByIdAndDelete(productId);
    const products = await Product.find({});
    return { message: "Product deleted successfully", products };
  } catch (error) {
    throw new Error("Error deleting product: " + error.message);
  }
}

async function updateProduct(productId, reqData) {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(productId, reqData, { new: true });
    if (!updatedProduct) {
      throw new Error("Product not found with id: " + productId);
    }
    return updatedProduct;
  } catch (error) {
    throw new Error("Error updating product: " + error.message);
  }
}

async function findProductById(id) {
  try {
    const product = await Product.findById(id).populate("category").exec();
    if (!product) {
      throw new Error("Product not found with id " + id);
    }
    return product;
  } catch (error) {
    throw new Error("Error finding product: " + error.message);
  }
}

async function getAllProducts() {
  try {
    const query = await Product.find({}).exec();
    return query;
  } catch (error) {
    throw new Error("Error occurred while executing the query: " + error.message);
  }
}

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  findProductById,
};
