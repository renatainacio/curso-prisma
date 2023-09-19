import joiBase from "joi";
import joiDate from "@joi/date";
import { CreatePost } from "../repositories/post-repository";

const Joi = joiBase.extend(joiDate);
export const postSchema = Joi.object({
  username: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
  date: Joi.date().format('YYYY-MM-DD')
})