import Joi from "joi";
const schema = Joi.object({
    name: Joi.string().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
    price: Joi.string().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
    description: Joi.string().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
    // username: Joi.string().required(),
    // email: Joi.string().required()
});
export { schema }