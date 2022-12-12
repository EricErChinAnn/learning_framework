const Forms = require("forms");

const fields = Forms.fields;
const validators = Forms.validators;

const createProductForm = ()=>{
    return Forms.create({
        "name":fields.string({
            required:true,
            errorAfterField:true
        }),
        "cost":fields.number({
            required:true,
            errorAfterField:true,
            validators:[validators.integer()]
        }),
        "description":fields.string({
            required:true,
            errorAfterField:true
        })
    })
}

module.exports = {createProductForm}