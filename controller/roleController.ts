import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

exports.index = async (req: Request, res: Response) => {
  try {
    const data = await prisma.role.findMany();
    return res.status(200).send({ message: "sduccess", data });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "error" });
  }
};

exports.store = async (req: Request, res: Response) => {
  try {
    const { title } = req.body;
    const result = await prisma.role.create({
      data: {
        title,
      },
    });
    if (result) {
      return res.status(200).send({ message: "success" });
    } else {
      return res.status(200).send({ message: "failed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "error" });
  }
};

exports.find = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await prisma.role.findFirst({
      where: {
        id: Number(id),
      },
    });
    return res.status(200).send({ message: "success", data: result });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "error" });
  }
};

exports.update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const result = await prisma.role.update({
      where: {
        id: Number(id),
      },
      data: {
        title: title,
      },
    });
    if (result) {
      return res.status(200).send({ message: "success" });
    } else {
      return res.status(200).send({ message: "failed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "error" });
  }
};

exports.destroy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await prisma.role.delete({
      where: {
        id: Number(id),
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "error" });
  }
};
