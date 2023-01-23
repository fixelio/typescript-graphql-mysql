import { Request, Response, NextFunction } from 'express';

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.log('Error:', JSON.stringify(error));

  res.status(error.status || 500).json({
    message: error.message || 'Something went wrong.'
  });
}

export default errorHandler;