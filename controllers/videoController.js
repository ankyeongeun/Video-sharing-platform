

export const home = (req,res) => res.render("home", { pageTitle: "Home"});
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