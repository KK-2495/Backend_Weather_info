import express from "express";
import { registerChecks, weatherCheckAuth } from "../Middlware/authChecks.js";
import { register } from "../Controller/userController.js";
import { getAstro, getTemp, getWindSpeed } from "../Controller/weatherController.js";
import { abtChannel, movieData, playList, searchVideo, trending, videoComments, videoInfo, videoRelated, ytChannel } from "../Controller/apiController.js";
import { detect, languageList, translate } from "../Controller/translateController.js";


const router = express.Router();
router.post('/register',registerChecks, register);

router.post('/check-temperature',weatherCheckAuth, getTemp);
router.post('/check-windspeed',weatherCheckAuth, getWindSpeed);
router.post('/check-astro',weatherCheckAuth, getAstro);

//api route//
router.post('/movie-data', movieData);


//youtube api//
router.get('/about-channel', abtChannel);
router.get('/yt-channel', ytChannel);
router.get('/video-related', videoRelated);
router.get('/video-comments', videoComments);
router.get('/trending', trending);
router.get('/video-info', videoInfo);
router.get('/playlist', playList);
router.get('/search-video', searchVideo);

//google api//
router.post('/detect', detect);
router.get('/language-list', languageList);
router.post('/translate', translate);

export default router;