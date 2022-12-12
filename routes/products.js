const express = require("express");
const async = require("hbs/lib/async");
const { createProductForm } = require("../forms");
const router = express.Router();


const {Product} = require("../models");



router.get("/add",(req,res)=>{
    const form = createProductForm();
    
    res.render("products/create",{
        "form": form.toHTML()
    });
})

router.post("/add",(req,res)=>{
    const productForm = createProductForm();
    
    productForm.handle(req, {
        "success": async (form)=>{
            const productObject = new Product();
            productObject.set("name", form.data.name);
            productObject.set("cost", form.data.cost);
            productObject.set("description", form.data.description);
            await productObject.save();

            res.redirect("/products/")
        },
        "empty": async (form)=>{
            res.redirect("/products/create",{
                'forms':form.toHTML()
            })
        },
        "error": async (form)=>{
            res.redirect("/products/create",{
                'forms':form.toHTML()
            })
        }
    })

    res.render("products/create",{
        "form": form.toHTML()
    });
})



router.get("/", async (req,res)=>{
    //get all result from table
    const products = await Product.collection().fetch();

    res.render("products/index",{
        "products": products.toJSON()
    })
})

module.exports = router;