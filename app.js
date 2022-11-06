"use strict";

//모듛
const express = require("express");
const app = express();


//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

//라우팅
const home = require("./routes/home");

app.use("/", home);//->//미들웨어 등록하는 방법


// app.get("/",(req, res) => {
//    res.render("home/index");
// });

// app.get("/login", (req, res) => {
//    res.render("home/login");
// });
// app.listen(PORT, function(){
//     console.log("서버 가동");
// });

// const http = require("http");
// const app = http.createServer((req, res) => {
//     // console.log(req.url);
//     res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8" });
//     if(req.url === "/") {
//         res.end("여기는 루트입니다.");
//     }else if(req.url ==="/login"){
//         res.end("여기는 로그인화면입니다.");
//     }
// });

// app.listen(3001, () => {
//    console.log("http 가동된 서버입니다."); 
// });

module.exports = app;