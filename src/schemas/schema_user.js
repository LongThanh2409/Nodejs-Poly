import Joi from "joi";
const schema_sigup = Joi.object({
    name: Joi.string().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
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