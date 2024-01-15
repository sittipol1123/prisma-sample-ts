import { Request, Response } from "express";
import uploadFilesMiddleware from "./helper/fileupload";

const TestController = (req: Request, res: Response) => {
    const gettest = () => {
        return "12";
    }

    return {
        gettest,
    }
}

export const fileupload = async (req: Request, res: Response) => {
    try {
        await uploadFilesMiddleware(req, res);
        // const file = req.files;
        // console.log(file?.length);
        // const imageNames = await uploadFilesMiddleware(req, res);
        // console.log(imageNames); 
        console.log(req.files); 
    } catch (error) {
        console.log(error);
    }
}

// export default TestController;