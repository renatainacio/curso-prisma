import joiBase from "joi";
import joiDate from "@joi/date";

const Joi = joiBase.extend(joiDate);

export const productSchema = Joi.object({
  label: Joi.string().required(),
  price: Joi.number().required(),
  description: Joi.string().required(),
  expirationDate: Joi.date().required(),
  eatable: Joi.boolean().optional()
})