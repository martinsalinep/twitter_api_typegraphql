import { Schema, Document, model } from "mongoose";

export interface ITweet{
  _id?: any;
  author: string;
  description: string;
  likes: number;
  createdAt?: Date;
  updatedAt?: Date;
}

interface ITweetDocument extends ITweet, Document {}

const TweetSchema: Schema<ITweetDocument> = new Schema({
  author: String,
  description: String,
  likes: {
    type: Number,
    default: 0,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

const TweetModel = model<ITweetDocument>("Tweet", TweetSchema);

export default TweetModel;
