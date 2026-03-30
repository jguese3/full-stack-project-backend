import express, {Express} from "express";
import cors from "cors";

// Routes import
import userGameRoutes from "./src/api/v1/routes/userGameRoutes";
import userRoutes from "./src/api/v1/routes/userRoutes"

// initialize express application
const app: Express = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));

// allow express to parse json
app.use(express.json());

// mount routes
app.use("/user-games", userGameRoutes);
app.use("/api/v1", userRoutes);

// listen for requests on root and send simple text response
app.get("/",  (_req, res) => {
    res.send("Got response from backend!");
});

export default app;