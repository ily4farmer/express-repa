import express from "express";
import dotenv from "dotenv";
import router from "./routes";
import sequelize from "./db";
import { getModels } from "./models/models";
import cors from "cors";
import ErrorHandlingMiddleware from "./middleware/ErrorHandlingMiddleware";
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", router);

getModels();

// Обработка ошибок, последний Middleware
// app.use(ErrorHandlingMiddleware);

app.listen(PORT, async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: true });
        console.log(
            `Example app listening on port http://localhost:${PORT}/api/`
        );
    } catch (error) {
        console.log(error);
    }
});
