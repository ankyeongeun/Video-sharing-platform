

export const home = (req,res) => res.render("home", { pageTitle: "Home"});
export const search = (req,res) => {
    const searchingBy = req.query.query;
    res.render("search", { pageTitle: "Search" , searchingBy: searchingBy});
};
