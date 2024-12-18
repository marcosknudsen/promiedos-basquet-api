import type { Request, Response } from "express";
import Log from "../models/Log";

export class LogController {
  static create = async (req: Request, res: Response) => {
    const log = new Log(req.body);

    try {
      await log.save();
      res.send("Log Creado");
    } catch (err) {
      console.log(err)
    }
  };

  static getAll = async (req: Request, res: Response) => {
    try {
      const logs = await Log.find({});
      res.json(logs);
    } catch (error) {
      console.log(error);
    }
  };

  static getLogById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const log = await Log.findById(id);

      if (!log) {
        const error = new Error("Log not found");
        res.status(404).json({ error: error.message });
      }

      res.json(log);
    } catch (error) {
      console.log(error);
    }
  };
}
