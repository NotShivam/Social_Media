import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extented: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extented: true}));
app.use(cors());
app.use('/posts', postRoutes);
const PORT = process.env.PORT;
mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTION_URL)
    .then(() => app.listen(process.env.PORT, () => console.log("Server running on port : " + process.env.PORT)))
    .catch((error) => console.log(error.message))
