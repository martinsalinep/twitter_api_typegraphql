import mongoose from "mongoose";
import { DB_URI } from "../../db";

mongoose.connect(DB_URI);
