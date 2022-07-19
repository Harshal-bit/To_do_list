const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")

const app = express();
let items = ["Buy food","Eat Food","Cook Food"];
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
   
    let day=date();
    res.render("list",{
        kindofday : day,
        newListItem : items,
    });
});

app.post("/",function(req,res){
    item = req.body.toDoItem ;
    items.push(item);
    res.redirect("/");

})
app.listen(3000,function(req,res){
    console.log("Server running on port 3000");
});