import axios from "axios";

export const getTemp = async (req,res) =>{
    try {
        const{city} = req.body;
        const accessKey = "dbaf23ce3deedf5dc8470d864abc7e9f";
        const response = await axios.post(`http://api.weatherstack.com/forecast?access_key=${accessKey}&query=${city}`);
        // console.log(response);
        let temp = response.data.current.temperature;
        return res.send(temp.toString());
    } catch (error) {
        return res.send(error);
    }
}

export const getWindSpeed = async (req,res) =>{
    try {
        const{city} = req.body;
        const accessKey = "f5c116ecca4568be2e2eb128bd6043ea";
        const response = await axios.post(`http://api.weatherstack.com/forecast?access_key=${accessKey}&query=${city}`);
        // console.log(response);
        let temp = response.data.current.wind_speed;
        return res.send(temp.toString());
    } catch (error) {
        return res.send(error);
    }
}

export const getAstro = async (req,res) =>{
    try {
        const{city} = req.body;
        const accessKey = "f5c116ecca4568be2e2eb128bd6043ea";
        const response = await axios.post(`http://api.weatherstack.com/forecast?access_key=${accessKey}&query=${city}`);
        // console.log(response);
        let temp = response.data.forecast['2023-06-15'].astro;
        return res.send(temp);
    } catch (error) {
        return res.send(error);
    }
}
