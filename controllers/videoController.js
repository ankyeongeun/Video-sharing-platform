import routes from "../routes";
import Video from "../models/Video";
import { query } from "express";

export const home = async (req, res) => {
    try {
      const videos = await Video.find({}).sort({'_id':-1});
      res.render("home", { pageTitle: "Home", videos });
    } catch (error) {
      console.log(error);
      res.render("home", { pageTitle: "Home", videos: [] });
    }
  };

export const search = async (req, res) => {
    const {
      query: { query: searchingBy }
    } = req;
    console.log(searchingBy);
    let videos = [];
    try {
      videos = await Video.find({
        title: { $regex: searchingBy, $options: "i" }
      });
    } catch (error) {
      console.log(error);
    }
    res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Search" });


export const postUpload = async (req, res) => {
    const {
        body: { title, description},
        file: { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl: path,
        title: title
    });
    console.log(newVideo);


    res.redirect(routes.videoDetail(newVideo.id));
    //근데 아이디가 어딧는데?


    
};



export const videoDetail = async(req, res) => {
    const {
        params: { id }// url에서 가져옴
    } =  req;
    try {
        const video = await Video.findById({_id: id});
        console.log(video);
        res.render("videoDetail", { pageTitle: video.title, video:video });//video 변수를 template에 전달! 
        
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
        
    }

};
export const getEditVideo = async(req, res) => {
    const {
        params: { id }// url에서 가져옴
    } =  req;
    try {
        const video = await Video.findById({_id: id});
        console.log(video);
        res.render("editVideo", { pageTitle: "videoEdit", video:video });//video 변수를 template에 전달! 
        
    } catch (error) {
        console.log(error);
        res.redirect(routes.home);
        
    }
};


export const postEditVideo = async(req, res) => {
    const {
        params: { id },// url에서 가져옴
        body: { title, description}
    } =  req;

    try {
      await Video.findOneAndUpdate({_id: id}, { title: title, description: description });
      res.redirect(routes.videoDetail(id));       
    } catch (error) {
        res.redirect(routes.home);
    }
};


export const deleteVideo = async(req, res) => {
    const {
        params: { id }// url에서 가져옴
    } =  req;
    try {
        await Video.findOneAndRemove({_id: id});

    } catch (error) {}
        res.redirect(routes.home);        
    
};