import axios from 'axios';
console.log(process.env.REACT_APP_EMAILJS);
console.log(process.env.REACT_APP_SERVER_BASE_URL);
export const fetchBmiData = async (weight, height) => {
  const options = {
    method: 'GET',
    url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
    params: {
      weight,
      height,
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'body-mass-index-bmi-calculator.p.rapidapi.com',
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.bmi;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch BMI data');
  }
};
