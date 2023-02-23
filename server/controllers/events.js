axios = require('axios');


const getEvents = async (apiKey) =>{
  try{
    const response = await axios.get('', { 
      params: {apiKey},
     });
     return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = { getEvents,};
