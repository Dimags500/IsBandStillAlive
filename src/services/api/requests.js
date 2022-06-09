import axios, { Axios } from "axios";
const cheerio = require("cheerio");

const BASE_URL = "https://6299d48a7b866a90ec439e21.mockapi.io/";
const CATEGORY = "heavy_metal";
const mask = "https://nameless-citadel-58066.herokuapp.com/";

export const getYearsByName1 = async (name) => {
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
  try {
    const response = await axios.get(
      mask + "https://www.last.fm/music/" + name
    );
    const $ = await cheerio.load(response.data);

    let data = $("dd").html();
    return data;
  } catch (error) {
    console.log("no results found");

    console.log("error" + error);
  }
};

export async function getYearsByName3(input) {
  var url =
    "https://en.wikipedia.org/w/api.php?action=parse&format=json&origin=*&page=" +
    input +
    "_(band)";

  const response = await axios.get(url);
  let html_code = response.data["parse"]["text"]["*"];
  let parser = new DOMParser();
  let html = parser.parseFromString(html_code, "text/html");
  let meta_table = html.getElementsByClassName("infobox vcard plainlist")[0]
    .innerHTML;
  let g = parser.parseFromString(meta_table, "text/html");

  let data = html.getElementsByClassName("hlist-separated");

  let res = [];
  for (let i = 0; i < data.length; i++) {
    let div = data[i].innerText.split("\n");
    res.push(div.filter((i) => i !== ""));
  }
  return res;
}
