import mongoose, { Schema, Document, Date } from "mongoose";

export type LogType = Document & {
  ip: string;
  date: Date;
  action: string;
  argument: number;
};

const LogSchema = new Schema({
  ip: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    required: true,
    trim: true,
  },
  action: {
    type: String,
    required: true,
  },
  argument: {
    type: Number,
    required: false,
  }
});

const Log = mongoose.model<LogType>("Log", LogSchema);

export default Log;