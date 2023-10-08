import axios from 'axios';

export const fetchBmiData = async (weight, height) => {
  const options = {
    method: 'GET',
    url: 'https://body-mass-index-bmi-calculator.p.rapidapi.com/metric',
    params: {
      weight,
      height,
    },
    headers: {
      'X-RapidAPI-Key': '3661f5a194mshf2166cfcbf1d782p149352jsndbdcb173ef6d',
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
