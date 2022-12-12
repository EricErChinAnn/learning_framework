const bookshelf = require("../bookshelf/index.js")

//Create a model.
//rep a single table in the database

//table name need to be all undercase, underscore instead of space and plural
//model name need to be Capitailize the 1st letter in a word, singular and no space
const Product = bookshelf.model("Product", {
    tableName:"products"
})

module.exports={
    //"Product": Product
    //is the same as
    Product
}