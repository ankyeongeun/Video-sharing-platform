import bodyParser from "body-parser";
import express from "express";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";


const app = express();

app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
app.use("/static",express.static("static"));
app.use(bodyParser.json());//enable to use body data 
app.use(bodyParser.urlencoded({ extended: true}));

app.use(localsMiddleware);

//routing -handling urls
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);



export default app;