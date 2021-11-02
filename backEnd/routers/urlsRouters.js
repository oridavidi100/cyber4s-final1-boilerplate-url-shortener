const express = require('express');
const router = express.Router();
const fs=require('fs')

const baseUrl="http://localhost:3000/api"

router.post("/",(req,res)=>{
    const longUrl=req.body.longUrl;
    const iD='_' + Math.random().toString(36).substr(2, 9)
    const shortUrl=baseUrl + iD;
    res.send({"long-url":longUrl,"short-url":shortUrl} )
})

router.get("/get/:id", (req, res) => { 
    res.send("yes");
})


module.exports = router;

