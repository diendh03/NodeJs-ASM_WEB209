import axios from "axios";
import Product from "../model/product";
export const getAll = async (req, res) => {
  try {
    // gửi request từ server nodes -> json-server
    const products = await Product.find();
    // Nếu mảng không có sản phẩm nào thì trả về 404
    if (products.length === 0) {
      res.status(404).json({
        message: "Không có sản phẩm nào",
      });
    }
    // Nếu có sản phẩm thì trả về 200 và mảng sản phẩm
    return res.status(200).json(products);
  } catch (error) {
    // Nếu có lỗi thì trả về 500 và lỗi
    return res.status(500).json({
      message: error,
    });
  }
};
export const get = async (req, res) => {
  try {
    // const { data: product } = await axios.get(
    //   `http://localhost:3001/products/${req.params.id}`
    // );
    const product = Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Product found",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Lỗi server",
    });
  }
};
export const create = async (req, res) => {
  try {
    // const { data: product } = await axios.post(
    //   "http://localhost:3001/products",
    //   req.body
    // );
    const product = await Product.create(req.body);
    if (!product) {
      return res.status(400).json({
        message: "Không thể tạo sản phẩm",
      });
    }
    return res.status(201).json({
      message: "Product created",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
export const remove = async (req, res) => {
  try {
    await axios.delete(`http://localhost:3001/products/${req.params.id}`);
    
    return res.status(200).json({
      message: "Sản phẩm đã được xóa thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};

export const update = async (req, res) => {
  try {
    // const { data: product } = await axios.patch(
    //   `http://localhost:3001/products/${req.params.id}`,
    //   req.body
    // );
    const product = Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "Không tìm thấy sản phẩm",
      });
    }
    return res.status(200).json({
      message: "Sản phẩm đã được cập nhật thành công",
      data: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
