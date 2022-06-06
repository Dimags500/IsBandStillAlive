import axios, { Axios } from "axios";

const BASE_URL = "https://6299d48a7b866a90ec439e21.mockapi.io/";
const CATEGORY = "heavy_metal";

export const getData = async () => {
  try {
    return await axios.get(BASE_URL + CATEGORY);
  } catch (error) {
    console.log(error);
  }
};

export const postData = async (data) => {
  try {
    const res = await axios.post(BASE_URL + CATEGORY, data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const putData = async (id, data) => {
  try {
    const res = await axios.put(BASE_URL + CATEGORY + "/" + id, data);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const deleteData = async (id) => {
  try {
    const res = await axios.delete(BASE_URL + CATEGORY + "/" + id);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
