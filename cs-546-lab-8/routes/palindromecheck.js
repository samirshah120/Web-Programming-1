const express = require('express');
const router = express.Router();
const data = require("../data");
const palindromecheck = data.palindromecheck;
router.get("/", (req, res) => {
  res.render("layouts/main", {});
});
router.post("/result", async (req, res) => 
{
    let texttotest = req.body['text-to-test']
    if(!texttotest){
      res.status(400).render("pages/error", {
               error: "No input provided. Please enter a string to check for Palindrome!"
      }); 
     return;
    }
    try{
      let result;
      result = await palindromecheck.checkPalindrome(texttotest)
      res.render("pages/result", {texttotest : texttotest,result : result})
    }
    catch (error) {
    res.status(400).render("checker/errorpage", {
      error: error
    });
  }
});
module.exports = router;