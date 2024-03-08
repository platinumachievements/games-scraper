const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();

app.get("/scrape", function (req, res) {
  axios
    .get("https://www.scrapethissite.com/pages/")
    .then((response) => {
      const $ = cheerio.load(response.data);
      let titles = [];
      $(".page .page-title").each((index, element) => {
        titles.push($(element).text().trim());
      });
      res.json(titles); // Send the scraped data back to the client
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("An error occurred while scraping the website.");
    });
});

app.listen(3000, function () {
  console.log("App is listening on port 3000!");
});
