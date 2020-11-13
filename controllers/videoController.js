import routes from "../routes";
import Video from "../models/Video";

export const home = async(req,res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });    
    } catch (error) {
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });//에러가 생겼을 경우 빈 열으로 반환하도록 함       
    }
};

export const search = (req,res) => {
    const searchingBy = req.query.query;
    res.render("search", { pageTitle: "Search" , searchingBy: searchingBy});
};

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Search" });


export const postUpload = (req, res) => {
    const {
        body: { file, title, description }
    } = req;
};



export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "videoDetail"});
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "editVideo"});
export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "deleteVideo"});