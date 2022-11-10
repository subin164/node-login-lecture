"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

//요청 조회
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login); 
router.get("/register", ctrl.output.register); 

//요청 생성
router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register); 

//요청 수정


//요청 삭제

module.exports = router