"use strict";

const id = document.querySelector("#id"),
    username = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword = document.querySelector("#confirmPassword"),
    registerBtn = document.querySelector("#button");

    console.log("register!!");
registerBtn.addEventListener("click", register);

function register(){
    if(!id.value)
        return alert("아이디를 입력해주세요.")
    if(password.value !== confirmPassword.value){
        return alert("비밀번호가 일치하지 않습니다.");
    } 
    const req = {
        id: id.value,
        username: username.value,
        password: password.value,
    };
    console.log(req);

    // fetch("/register", {
    //     method :"POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(req),
    // })
    // .then((res) => res.json())
    // .then((res) =>{
    //     if(res.success){
    //         location.href="/";
    //     }else{
    //         alert(res.message);
    //     }
    // })
    // .catch((err) => {
    //     console.error("로그인중 에러 발생");
    // });
}