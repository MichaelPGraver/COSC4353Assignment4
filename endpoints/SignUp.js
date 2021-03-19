const { response } = require("express");
let connection = require("../database");
//let passAlgo = require("password-hash")

const endpoint = async function (request, response){
    let { username, password } = request.body;
    console.log(username, password);
    connection.query(
        "SELECT id as username FROM user",
        (err, res, fields) => {
            if (err) {
                return response.send(err);
            }
            let username_list = res.map((e) => e.username);
            if (username_list.includes(username))
                return response.send(
                    JSON.stringify({
                        success: false,
                        data: "Username exists",
                    })
                );
            /*
            let newPassword = passAlgo.generate(password, {
                algorithm: "sha256",
                iterations: 5,
                saltlength: 32,
            })
            */
            connection.query(
                `INSERT INTO user (username, password) VALUES ('${username}', '${password}')`,
                (err, res, fields) => {
                    if (err) {
                        return response.send(err);
                    }
                    return response.send(
                        JSON.stringify({
                            success: true,
                            data: null,
                        })
                    );
                }
            );
        }
    );
};

module.exports = endpoint;