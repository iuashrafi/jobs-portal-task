import fetchAPI from "./fetchAPI";

export const createJob = async (jobData) => {
  try {
    const response = await fetchAPI("/jobs", {
      method: "POST",
      body: JSON.stringify(jobData),
    });
    return response;
  } catch (error) {
    console.error("Error creating job:", error);
    throw error;
  }
};

export const getJobs = async (query) => {
  console.log(query);
  try {
    const response = await fetchAPI(`/jobs?${query}`);
    return response;
  } catch (error) {
    console.error("Error fetching jobs : ", error);
    throw error;
  }
};
