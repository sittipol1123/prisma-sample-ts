import { Request, Response } from "express";

const TestController = (req: Request, res: Response) => {
    const gettest = () => {
        return "12";
    }

    return {
        gettest,
    }
}

export default TestController;