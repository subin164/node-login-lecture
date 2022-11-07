"use strict";

//모듛
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

//앱에 미들 웨어 등록
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());

//URL을 통해 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true}));

//use -> 을 통해 미들 웨어를 등록해주는 메서드.
app.use("/", home);



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