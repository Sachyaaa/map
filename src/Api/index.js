import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async(sw, ne) =>{
    try {
        const {data : {data}} = await axios.get(URL, {
          params: {
            bl_latitude: sw.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            tr_latitude: ne.lat,
        },
        headers: {
          'X-RapidAPI-Key': '4928a418b8mshf312c6908050c1ap14e0f5jsn7d18831e3453',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });

        return data;
    } catch (error) {
        console.log(error);
    }
}