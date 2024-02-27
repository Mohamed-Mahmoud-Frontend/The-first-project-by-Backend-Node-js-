const http = require("http");
const date = require("./datemodule");
const fs = require("fs");
const { log } = require("console");
// create server py node js
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); //header
    res.end(
      `<h1> welcome to my server and the first server create by node js (Backend developer)</h1>` +
        date.myDate()
    ); //body
  })
  .listen(8080); //port

// run server = node file name .js

// Res || req في داخلهم بيكون في  header, body
// 200 status = no problem
// 404 status = problem {not found}




//lecture 2

/*
server: هوا جهاز كمبيوتر بيبعت request ويستقبل response

انواع ال module:
1: built in module (http) حاجه بالفعل موجوده داخل اللغه  مدمج جوا اللغه
2:your own module () كود خاص لحاجه معينه بتبنيها
3 : third party module - external module :: ناس مبرمجين عاملينها واحنا بنستخدمها


fille fs
2 - readFile ( fs.readfile)
3 - writeFile()
4 - appendFile()

fs = file system

1 - create ()
2 - update()
3- rename(fs.rename)
4- delete(fs.unlink)
5-read (fs.open)
*/

fs.appendFile("newfile2.html", "Hello worldddddddd", function () {
  console.log("Done");
});

fs.open("newfile1.html","hello mohamed", function () {
  console.log("Done");
});
fs.appendFile("newfile3.html" , "hello world", function () {
  console.log("Done");
});
fs.open("newfile3.html", "a", function(err){
  console.log(arguments)
})
fs.unlink("newfile3.html",function(){
  console.log("Done");

})
