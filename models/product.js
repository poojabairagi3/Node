const { json } = require('body-parser');
const fs=require('fs');
const path=require('path');

const p=path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'product.json'
);

const  getProductsfromFile=(cb)=>{
    
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            return cb([]);
        }else{
            cb(JSON.parse(fileContent));
        }
        
    });

};

module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
        getProductsfromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log(err);
            })
        });
        
    }

    static fetchAll(cb) {
       getProductsfromFile(cb);
}
};