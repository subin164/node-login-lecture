"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    login(){
        const data = this.body;
        const {id, password} = UserStorage.getUsers(data.id);

        if(id){
            if(id == data.id && password == data.password){
                return {success: true};
            }
            return {success: false, message: "비밀번호가 틀렸습니다."};
        }
        return {success : false, message: "아이디와 비밀번호를 입력해주세요"};
    }

    register(){
        const data = this.body;
        UserStorage.save(data);
    }

    
}

module.export = User;