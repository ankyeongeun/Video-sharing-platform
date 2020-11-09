//locals to global - 템플릿(뷰)에서 사용가능하게 함
import routes from "./routes";




export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "YouTube-clone";
    res.locals.routes = routes;
    next(); //다음에 있는 함수로 넘어가도록..
};