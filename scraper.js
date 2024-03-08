const axios = require("axios");
const cheerio = require("cheerio");

const url = "https://www.scrapethissite.com/pages/";

axios
  .get(url)
  .then((response) => {
    const $ = cheerio.load(response.data);
    // Your scraping logic here
    $(".page .page-title").each((index, element) => {
      console.log($(element).text().trim());
    });
  })
  .catch((error) => {
    console.log(error);
  });
