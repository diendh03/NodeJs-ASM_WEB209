import User from "../model/user";
import { signupSchema } from "../schemas/auth";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  try {
    //validate dau vao
    const { error } = signupSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      const errors = error.details.map((err) => err.message);

      return res.status(400).json({
        message: errors,
      });
    }
    //kiem tra email da ton tai hay chua
    const ExistEmail = await User.findOne({ email: req.body.email });
    if (ExistEmail) {
      return res.status(400).json({
        message: "Email da ton tai",
      });
    }
    //Ma hoa mat khau
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    //tao user moi voi mat khau da ma hoa
    const user = await User.create({
      ...req.body,
      password: hashPassword,
    });
    //tra ve client voi mat khau rong de bao mat mat khau
    user.password = undefined;
    return res.status(201).json({
      message: "Tao tai khoan thanh cong",
      data: user,
    });
  } catch (error) {}
};
// B1: Kiểm tra thông tin req.body có hợp lệ hay không
// B2: Kiểm tra email đã tồn tại hay chưa?
// B2.1: Mã hóa mật khẩu trước khi tạo user mới
// B3: Tạo user mới
// B4: Tạo token mới chứa id của user
// B5: Trả về client
