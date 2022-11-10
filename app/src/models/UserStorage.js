"use strict";

class UserStorage{
    //#을 해주는 이유는 접근제한하기 위해서다 
    static #users = {
        id: ["soobeen", "soo", "beem"],
        password:["123", "12344", "123456"],
        name: ["soo","skroqkf","ddd"],
    };
    
    static getUsers(...item){
        console.log(item);
        const users = this.#users;
        const newUsers = item.reduce((newUsers, item) =>{
           if(users.hasOwnProperty(item)){
            newUsers[item] = users[item];
           }
           return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;