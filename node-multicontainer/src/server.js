import express from "express";
import * as dotenv from "dotenv";
import connectDatabase from "./Database/db.js";
import productRoute from "./routes/product.js"; 

const app = express();
dotenv.config();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/products", productRoute)

connectDatabase();


app.listen(PORT, () => console.log(`App listening on http://localhost:${PORT}`));
