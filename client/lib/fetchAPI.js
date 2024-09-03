const fetchAPI = async (url, options = {}) => {
  // const baseURL = "https://jobs-portal-task.onrender.com/api";

  // for local machine
  const PORT = 4005;
  const baseURL = `http://localhost:${PORT}/api`;
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
