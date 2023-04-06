import Joi from "joi";

export const categorySchema = Joi.object({
    name: Joi.string().required().min(3).messages({
        "string.empty": 'Trường "Name" không được để trống',
        "string.min": 'Trường "mật khẩu" phải có ít nhất 3 ký tự',
        "any.required": 'Trường "name" là bắt buộc',
    }),
    products: Joi.array(),
});