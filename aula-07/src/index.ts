import express, { Request, Response, json } from "express";

import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(json());

const port = Number(process.env.PORT) || 5000;
app.listen(port, () => console.log(`Server is up and running on port ${port}`));