import axios, { Axios } from "axios";

export const getData = async () => {
  const url = "https://6299d48a7b866a90ec439e21.mockapi.io/heavy_metal";

  return await await axios.get(url);
};

export const postData = async (data) => {
  const url = "https://6299d48a7b866a90ec439e21.mockapi.io/heavy_metal";

  const res = await axios.post(url, data);
  console.log(res);
};

export const putData = async (id, data) => {
  const url = "https://6299d48a7b866a90ec439e21.mockapi.io/heavy_metal/id";

  const res = await axios.put(url, data);
  console.log(res);
};
