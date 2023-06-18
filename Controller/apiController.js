import axios from "axios";

export const movieData = async (req,res) =>{
    try {
        const{page} = req.body;
        const Api_key = "c45a857c193f6302f2b5061c3b85e743";
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${Api_key}&language=en-US&page=1`);
        // const pagination = response.data.results.skip((page-1)*5).limit(5).exec();
        const pagination = response.data.results.slice((page - 1) * 5, page * 5)
        // console.log(response);
        return res.send(pagination);
    } catch (error) {
        return res.send(error);
    }
}