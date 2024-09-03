// import "../envConfig";
const fetchAPI = async (url, options = {}) => {
  // const PORT = process.env.PORT;
  const baseURL = process.env.BACKEND_URL;
  const defaultOptions = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const requestOptions = {
    ...defaultOptions,
    ...options,
  };
  // console.log("requestoptions=", requestOptions);
  const apiURL = baseURL + url;
  try {
    const response = await fetch(apiURL, requestOptions);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error in API call:", error);
    throw error;
  }
};

export default fetchAPI;
