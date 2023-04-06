import Joi from "joi";
const schema = Joi.object({
    nameProducts: Joi.string().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
    priceProducts: Joi.number().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
    descriptionProducts: Joi.string().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
    Old_priceProducts: Joi.number().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
    imagesProducts: Joi.string().required()
        .messages(
            { "string.empty": "Không được để trống" },
            { "any.required": "Bắt buộc" }
        ),
    categoryId: Joi.string().required(),
    // username: Joi.string().required(),
    // email: Joi.string().required()
});
export { schema }