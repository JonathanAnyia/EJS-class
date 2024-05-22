const home = ((req, res) => {

    res.render('./Portfolio/index', values)
})


const about =(req, res) => {
    const values = {
        fisrt_name : "toxic",
        surname : "aneeyah",
        dob : "18 march"
    };

    res.render("./Portfolio/about", {values})
};

const contact = (req, res) => {
    res.render("./Portfolio/contact");
};

const bloggrid = (req, res) => {
    res.render("./Portfolio/bloggrid");
};

const blogdetails = (req, res) => {
    res.render("./Portfolio/blogdetails");
};

const bloglist = (req, res) => {
    res.render("./Portfolio/bloglist");
};

const intro = (req, res) => {
    res.render("./Portfolio/intro");
};

const portfolio = (req, res) => {
    res.render("./Portfolio/portfolio");
};

const portfoliodetails = (req, res) => {
    res.render("./Portfolio/portfoliodetails");
};

const servicedetails = (req, res) => {
    res.render("./Portfolio/servicedetails");
};

const services = (req, res) => {
    res.render("./Portfolio/services");
};

export {home, about, contact, bloggrid, blogdetails, bloglist, intro, portfolio, portfoliodetails, servicedetails, services};