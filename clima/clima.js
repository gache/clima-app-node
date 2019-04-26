const axios = require('axios');


const getClima = async (lat, lng ) => {

   const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5466e369e803574ba11a4d308185c3dc&units=metric`);
    return resp.data.main.temp;
}





module.exports = {
    getClima
}
