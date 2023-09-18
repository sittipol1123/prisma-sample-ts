import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";

exports.verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if(!token){
        return res.status(403).send("a token is reqired for authen");
    }

    try{
        const decoded = Jwt.verify(token, 'secret');
    }catch(err){
        return res.status(401).send("invalid token");
    }

    return next();
}