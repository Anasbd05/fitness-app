import axios from "axios";

const url = "https://exercisedb.p.rapidapi.com";
const apikey = "f65522c5bcmshea97c260f086c20p10e6dcjsn6f02a95c684a";

const apiCall = async (params) => {
  try {
    const options = {
      method: "GET",
      url: url,
      params,
      headers: {
        "x-rapidapi-key": apikey,
        "x-rapidapi-host": "exercisedb.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const FetchExercice = async (bodyPart) => {
  let data = await apiCall(url + `/exercises/bodyPart/back${bodyPart}`);
  return data;
};
