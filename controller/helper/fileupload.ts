import * as util from "util";
import * as path from "path";
import multer from "multer";
import { Request, Express } from "express";

const storage = multer.diskStorage({
  destination: (
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, destination: string) => void
  ) => {
    callback(null, path.join(`${__dirname}/../../storage/upload`));
  },
  filename: (
    req: Request,
    file: Express.Multer.File,
    callback: (error: Error | null, filename: string) => void
  ) => {

    // validate file by type
// ***********************************************************
    // const match = ["image/png", "image/jpeg"];

    // if (match.indexOf(file.mimetype) === -1) {
    //   const message = `${file.originalname} is invalid. Only accept png/jpeg.`;
    //   return callback(new Error(message), "");
    // }
// ***********************************************************

    const filename = `${Date.now()}-${file.originalname}`;
    callback(null, filename);
  },
});

const uploadFiles = multer({ storage: storage }).array("multi-files", 10);
const uploadFilesMiddleware = util.promisify(uploadFiles);

export default uploadFilesMiddleware;