import axios from "axios"; //Promise based HTTP client for the browser and node.js

// Create an Axios instance with a base URL pointing to the local server
export const api = axios.create({
  baseURL: "http://localhost:5000",
});

// Function to make a GET request to the specified URL and update data using the provided setter function
export const fetchData = async (url, setData) => {
  // Make a GET request to the API endpoint defined by the given URL
  const response = await api.get(url);
  console.log(response);
  // Update the data using the provided setter function with the response data
  setData(response.data);
};
