import express, { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const webroute = require('./route/web');

const prisma = new PrismaClient();
const app: Express = express();
const port: number = 3333;

app.use(express.json());
app.use(webroute);

app.get("/", async (req: Request, res: Response) => {
  const data = await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
  return res.json({ message: "hello", data });
});

app.listen(port, () => {
  console.log("app is started");
});
