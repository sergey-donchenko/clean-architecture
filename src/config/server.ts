import express from "express";
import productRoutes from "../modules/catalog/presentation/routes/ProductRoutes";
import AppConfig from "./app";

const app = express();
const PORT =  AppConfig.port;

app.use(express.json());

app.use('/api/v1', productRoutes);

app.listen(PORT, () => console.log(`Server is running on port http://localhost:${PORT}`));