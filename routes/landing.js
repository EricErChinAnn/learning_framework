const express = require("express");

// 1 router for account management
// 1 for managing products
// 1 for order management
const router = express.Router();

router.get("/",(req,res)=>{
    res.render("./landing/home.hbs")
})

router.get("/about-us",(req,res)=>{
    res.render("./landing/about.hbs")
})

router.get("/contact-us",(req,res)=>{
    res.render("./landing/contact.hbs")
})



module.exports = router