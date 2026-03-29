import express, {Express} from "express";
import cors from "cors";
import userGameRoutes from "./src/api/v1/routes/userGameRoutes";

// initialize express application
const app: Express = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));

// allow express to parse json
app.use(express.json());

app.use("/user-games", userGameRoutes);

// listen for requests on root and send simple text response
app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

export default app;