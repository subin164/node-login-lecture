"use strict";
const output = {
    
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    }
}
const users = {
    id: ["soobeen", "soo", "beem"],
    password:["123", "12344", "123456"],
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            password = req.body.password;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: true,
            message: "로그인에 실패하였습니다.",
        })

    }
}

module.exports = {
    output,
    process,
};

/**
 module.exports = {
    home: "home",
    login : "login"
}

 */