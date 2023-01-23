import { Request, Response, NextFunction } from 'express';

type ControllerHandler = (req: Request, res: Response, next: NextFunction) => Promise<Response>;

const useController = (controller: ControllerHandler) => (req: Request, res: Response, next: NextFunction) =>
  Promise.resolve(controller(req, res, next)).catch(error => {
    console.log('Error:', JSON.stringify(error));
    res.status(error.status || 500).json({
      message: error.message || 'Something went wrong.'
    });
  });

export default useController;