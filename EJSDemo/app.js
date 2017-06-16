var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
    
})

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    
    res.render("love", {thingVar: thing});
})

app.get("/posts", function(req, res){
    var posts = [
        {title: "Post 1", author: "Suzy"},
        {title: "my adorable boston terrier", author: "Edward"},
        {title: "can you believe what doggos did", author: "Brian"},
        {title: "feed me hooman", author: "Duke"}
        
        ];
    res.render("posts", {posts: posts})
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server is listening");
});