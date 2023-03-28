import bcrypt from "bcryptjs"
import { schema_sigup, schema_login } from "../schemas/schema_user.js"

import { User } from "../models/user.js";
export const user_sigup = async (req, res) => {


    try {

        const { name, email, password } = req.body;
        const { error } = schema_sigup.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map(err => err.message)
            return res.status(400).json({ message: errors });
        }
        // check email đã tồn tại
        const usesrs = await User.findOne({ email });
        if (usesrs) {
            return res.send({
                message: "Email đã tồn tại"
            })
        }
        // Dùng bcrypt để mã hoá
        const hashedPassword = await bcrypt.hash(password, 10);
        // const { data: product } = await axios.post(`${API_URI}`, req.body);
        const user = await User.create(
            { name, email, password: hashedPassword }
        );
        if (!user) {
            res.send({
                messenger: "Thêm sản phẩm không thành công",
            });
        }

        return res.json(user);
    } catch (err) {

        res.status(500).json({ messenger: err });
    }
};
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const { error } = schema_login.validate(req.body, { abortEarly: false });
        if (error) {
            const errors = error.details.map((err) => err.message);
            return res.status(400).json({ message: errors });
        }
        // Tìm kiếm user trong cơ sở dữ liệu
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Tài khoản không tồn tại" });
        }
        // So sánh mật khẩu đã nhập với mật khẩu được mã hoá trong cơ sở dữ liệu
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: "Mật khẩu không đúng" });
        }
        return res.json({ user });
    } catch (err) {
        res.status(500).json({ message: err });
    }
};