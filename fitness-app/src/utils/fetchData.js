export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3661f5a194mshf2166cfcbf1d782p149352jsndbdcb173ef6d',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '3661f5a194mshf2166cfcbf1d782p149352jsndbdcb173ef6d',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
