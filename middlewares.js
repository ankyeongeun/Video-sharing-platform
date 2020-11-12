//locals to global - 템플릿(뷰)에서 사용가능하게 함
import routes from "./routes";
import multer from "multer";

const multerVideo = multer({ dest: "videos/" });



//잘 이해안되는 부분
export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "YouTube-clone";
    res.locals.routes = routes;
    next(); //다음에 있는 함수로 넘어가도록..
    
};

export const uploadVideo = multerVideo.single("videoFile");