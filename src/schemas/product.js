import joi from "joi";
export const productSchema = joi.object({
  productName: joi.string().required(),
  price: joi.number().required(),
  originalPrice: joi.number().required(),
  description: joi.string(),
  image: joi.string().required(),
  categoryId: joi.string().required(),
});
