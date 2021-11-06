import { Request, Response } from "express";

export default (_req: Request, res: Response): any => {

    console.log('CUSTOM API')
	res.send('OKAY1')
};