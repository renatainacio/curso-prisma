import { Request, Response } from "express";
import httpStatus from "http-status";

import postService from "../services/post-service";
import { CreatePost } from "../repositories/post-repository";

async function getPosts(req: Request, res: Response) {
  const posts = await postService.getPosts();
  res.send(posts);
}

async function getPostById(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  const posts = await postService.getPost(id);
  res.send(posts);
}

async function createPost(req: Request, res: Response) {
  const body = req.body as CreatePost;
  await postService.createPost(body);

  res.sendStatus(httpStatus.CREATED);
}

async function deletePost(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) res.sendStatus(httpStatus.BAD_REQUEST);

  await postService.deletePost(id);
  res.sendStatus(204);
}

const postController = {
  getPosts,
  getPostById,
  createPost,
  deletePost
}

export default postController;