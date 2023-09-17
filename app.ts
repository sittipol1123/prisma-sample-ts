import express, { Express, Request, Response } from "express";
const app: Express = express();
const port: number = 3333;

app.get("/", (req: Request, res: Response) => {
  return res.json({ message: "hello" });
});

app.listen(port, () => {
    console.log('app is started');
})