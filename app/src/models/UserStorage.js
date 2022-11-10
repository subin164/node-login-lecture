"use strict";

class UserStorage{
    //#을 해주는 이유는 접근제한하기 위해서다 
    static #users = {
        id: ["soobeen", "soo", "beem"],
        password:["123", "12344", "123456"],
        name: ["soo","skroqkf","ddd"],
    };
    
    static getUsers(...fields){
        console.log(fields);
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
           if(users.hasOwnProperty(field)){
            newUsers[field] = users[field];
           }
           return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idIdex = users.id.indexOf(id);
        const userKeys = Object.keys(users); //=> [id, password, name] 
        const userInfo = usersKey.reduce((newUser, info) =>{
            newUser[info] = users[info][idIdex];
            return newUser;
        },{});
        
        return userInfo;
    }

    static save(userInfo){
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        console.log(users);
    }
}

module.exports = UserStorage;