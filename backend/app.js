import express from "express";
import cors from 'cors';

// Instancia global
const app = express();


// Middlewares
app.use(cors());
app.use(express.json())



export default app
