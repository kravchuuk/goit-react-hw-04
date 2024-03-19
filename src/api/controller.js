import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "JQPIkyjkGXvNLT4jg_Gd6QIokN3qLXFKbsFmyF8Ae8I";

export const getPictures = async (searchText, page) => {
  const axiosInstance = axios.create();

  const params = {
    client_id: ACCESS_KEY,
    page: page,
    query: encodeURIComponent(searchText),
    per_page: 12,
  };

  const endPoint = `/search/photos?${new URLSearchParams(params).toString()}`;

  try {
    const response = await axiosInstance.get(endPoint);
    return response.data;
  } catch (error) {
    console.log(error.message);
  }
};
