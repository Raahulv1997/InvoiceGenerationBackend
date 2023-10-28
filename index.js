import connection from "./src/Configs/Db.js";
import express from 'express';
import "dotenv/config"
import cors from 'cors'
import AddItemRouter from "./src/Routers/invoiceRouter.js";

const app= express();
app.use(express.json())
app.use(cors())
app.use(AddItemRouter)

connection;

app.listen(process.env.SERVERPORT, () => {
    console.log(`server is running at ${process.env.SERVERPORT}`);
  });

