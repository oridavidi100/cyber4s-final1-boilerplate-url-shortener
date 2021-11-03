const { doesNotMatch } = require('assert');
const express = require('express');
const router = express.Router();
const fs=require('fs')
const path = require("path");

const baseUrl="http://localhost:3000/api"

router.post("/",(req,res)=>{
    const longUrl=`${req.body.longUrl}`;
    const iD='_' + Math.random().toString(36).substr(2, 9)
    const shortUrl=baseUrl +"/"+ iD;
    dataBase = JSON.parse(fs.readFileSync("./backEnd/DB.json", "utf-8"));
    for (let key in dataBase){
        if (dataBase[key].longUrl===longUrl){
            return res.send(baseUrl +"/"+ key)
        }
    }
    dataBase[iD] ={"longUrl":longUrl,"date":new Date(),"numOfEntr":0};
    fs.writeFileSync("./backEnd/DB.json", JSON.stringify(dataBase));
    res.send(`${shortUrl}`);
})



router.get("/:id/", (req, res) => { 
    const id=req.params.id
    let dataBase = JSON.parse(fs.readFileSync("./backEnd/DB.json", "utf-8"));
    dataBase[id]["numOfEntr"]+=1
    console.log(dataBase[id]["numOfEntr"])
    fs.writeFileSync("./backEnd/DB.json", JSON.stringify(dataBase));
    res.status(301).header("location", dataBase[id].longUrl);
    res.end()
})





module.exports = router;

