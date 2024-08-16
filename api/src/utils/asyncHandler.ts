import { Request, Response, NextFunction } from 'express';

const asyncHandler = (requestHandler: (req: Request, res: Response, next: NextFunction) => Promise<void>) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(requestHandler(req, res, next)).catch((error: Error) => {
            console.log(error);
            next(error);
        });
    };
};

export default asyncHandler;