import express from "express";
import { registerChecks, weatherCheckAuth } from "../Middlware/authChecks.js";
import { register } from "../Controller/userController.js";
import { getAstro, getTemp, getWindSpeed } from "../Controller/weatherController.js";
import { abtChannel, movieData } from "../Controller/apiController.js";


const router = express.Router();
router.post('/register',registerChecks, register);

router.post('/check-temperature',weatherCheckAuth, getTemp);
router.post('/check-windspeed',weatherCheckAuth, getWindSpeed);
router.post('/check-astro',weatherCheckAuth, getAstro);

//api route//
router.post('/movie-data', movieData);


//youtube api//
router.post('/about-channel', abtChannel);

export default router;