import axios from "axios";

export const detect = async (req,res) =>{   
    try {
        const {input} = req.body;
        const encodedParams = new URLSearchParams();
        encodedParams.set('q', `${input}`);
        
        const options = {
          method: 'POST',
          url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/detect',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'f571456fc6msh99ccc4937766211p1cb810jsn9362856f689f',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          },
          data: encodedParams,
        };
          const response = await axios.request(options);
          return res.send(response.data);
      } catch (error) {
          console.error(error);
      }
}


export const languageList = async (req,res) =>{   
    try {
        const options = {
            method: 'GET',
            url: 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages',
            headers: {
              'Accept-Encoding': 'application/gzip',
              'X-RapidAPI-Key': 'f571456fc6msh99ccc4937766211p1cb810jsn9362856f689f',
              'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
            }
          };
          const response = await axios.request(options);
          return res.send(response.data);
      } catch (error) {
          console.error(error);
      }
}


export const translate = async (req,res) =>{   
    try {
        const{input} = req.body;
        const encodedParams = new URLSearchParams();
        encodedParams.set('q', `${input}` );
        encodedParams.set('target', 'es');
        encodedParams.set('source', 'en');
        
        const options = {
          method: 'POST',
          url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
          headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'f571456fc6msh99ccc4937766211p1cb810jsn9362856f689f',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
          },
          data: encodedParams,
        };
          const response = await axios.request(options);
          return res.send(response.data);
      } catch (error) {
          console.error(error);
      }
}
