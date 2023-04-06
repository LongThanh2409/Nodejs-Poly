import Joi from "joi";
const schema_sigup = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": 'Trường "tên" không được để trống',
        "any.required": 'Trường "tên" là bắt buộc',
    }),
    email: Joi.string().email().required().messages({
        "string.empty": 'Trường "email" không được để trống',
        "string.email": 'Trường "email" không đúng định dạng',
        "any.required": 'Trường "email" là bắt buộc',
    }),
    password: Joi.string().min(6).required().messages({
        "string.empty": 'Trường "mật khẩu" không được để trống',
        "string.min": 'Trường "mật khẩu" phải có ít nhất 6 ký tự',
        "any.required": "Trường mật khẩu là bắt buộc",
    }),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
        "string.empty": 'Trường "xác nhận mật khẩu" không được để trống',
        "any.required": "Trường xác nhận mật khẩu là bắt buộc",
        "any.only": 'Trường "xác nhận mật khẩu" không khớp',
    }),
});
const schema_login = Joi.object({

    password: Joi.string().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
    email: Joi.string().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
    // username: Joi.string().required(),
    // email: Joi.string().required()
});
export { schema_sigup, schema_login }