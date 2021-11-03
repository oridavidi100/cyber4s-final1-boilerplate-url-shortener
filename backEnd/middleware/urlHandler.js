const path = require("path")
const fs = require("fs");
const { post } = require("../routers/urlsRouters");
const { METHODS } = require("http");

function isValidHttpUrl(string) {
    let url;
    
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

function urlHandler (req, res, next) {
    if(req.method==="POST"){
    const longUrl=`${req.body.longUrl}`;
    if(!longUrl) {
        throw {"status": 401, "messege": "url missing"};
    }
    if(isValidHttpUrl(longUrl)===false) {
        throw {"status": 401, "messege": " url not valid"};
    }
    next(); 
     }
}
module.exports = {urlHandler}