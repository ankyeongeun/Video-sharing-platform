import express from "express";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

const app = express();




//routing -handling urls

app.use("/", globalRouter);
app.use("/user", userRouter);
app.use("/video", videoRouter);



export default app;