import axios, { Axios } from "axios";
const cheerio = require("cheerio");

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

export const getYearsByName1 = async (name) => {
  const mask = "https://nameless-citadel-58066.herokuapp.com/";
  const url = "https://www.metal-archives.com/bands/";

  try {
    const response = await axios.get(mask + url + name);

    let html_code = response.data;
    let parser = new DOMParser();
    let html = parser.parseFromString(html_code, "text/html");
    const div = html
      .getElementById("band_stats")
      .getElementsByClassName("clear")[0]
      .innerText.split("\n");
    let data = div.filter((i) => i !== "");
    return await data;
  } catch (error) {
    console.log(error);
  }
};

export const getYearsByName2 = async (name) => {
  const mask = "https://nameless-citadel-58066.herokuapp.com/";

  try {
    const response = await axios.get(
      mask + "https://www.last.fm/music/" + name
    );
    const $ = await cheerio.load(response.data);

    let data = $("dd").html();

    return data;
    // if( data !== null ){
    //     let arr = data.split(' ') ;
    //     const start = arr[0]
    //     const end = arr[2] ==="present" ? new Date().getFullYear(): arr[2]  ;

    //      return [start ,  end ];

    // }
  } catch (error) {
    console.log("no results found");

    console.log("error" + error);
  }
};
