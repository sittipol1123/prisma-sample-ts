import { PrismaClient } from "@prisma/client";
import { Request, Response, response } from "express";

const prisma = new PrismaClient();

exports.index = async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany();
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
};

exports.store = async (req: Request, res: Response) => {
  try {
    const { name, email }: { name: string; email: string } = req.body;
    const result = await prisma.user.create({
      data: {
        email: email,
        name: name,
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
    const result = await prisma.user.findFirst({
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
    const { name } = req.body;
    const result = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
      },
    });

    if (result) {
      return res.status(200).send({ message: "success" });
    } else {
      return res.status(200).send({ message: "failed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

exports.destroy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    if (result) {
      return res.status(200).send({ message: "success" });
    } else {
      return res.status(500).send({ message: "failed" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};
