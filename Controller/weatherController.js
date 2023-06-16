import axios from "axios";

export const getTemp = async (req,res) =>{
    try {
        const{city} = req.body;
        const accessKey = "478f6249ca8b69915660611ff52d0eb9";
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
        const accessKey = "478f6249ca8b69915660611ff52d0eb9";
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
        const accessKey = "478f6249ca8b69915660611ff52d0eb9";
        const response = await axios.post(`http://api.weatherstack.com/forecast?access_key=${accessKey}&query=${city}`);
        // console.log(response);
        let temp = response.data.forecast['2023-06-15'].astro;
        return res.send(temp);
    } catch (error) {
        return res.send(error);
    }
}
