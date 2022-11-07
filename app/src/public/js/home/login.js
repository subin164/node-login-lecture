"use strict";

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req = {
        id: id.value,
        password: password.value,
    };
    console.log(req);
}

console.log(id); //-> null값 나옴 ejs 보다 console.log 값이 먼저 출력된다. ejs에 값을 먼저 가져오기위해 <sciprt>안에  defer를 작성한다.
console.log("hello"); 