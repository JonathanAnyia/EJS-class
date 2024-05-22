import express from "express";
import {home, about, contact, bloggrid, blogdetails, bloglist, intro, portfolio, portfoliodetails, servicedetails, services} from '../controller/indexcontroller.js'

const router = express.Router();

router.get("/", home)
router.get('/about', about);
router.get('/contact', contact);
router.get('/bloggrid', bloggrid);
router.get('/blogdetails', blogdetails);
router.get('/bloglist', bloglist);
router.get('/intro', intro);
router.get('/portfolio', portfolio);
router.get('/portfoliodetails', portfoliodetails);
router.get('/servicedetails', servicedetails);
router.get('/services', services);


export default router;