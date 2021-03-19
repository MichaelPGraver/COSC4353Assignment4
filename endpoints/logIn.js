let connection = require("../database");
const passAlgo = require("password-hash")

const endpoint = function (request, response) {
    /*
    let {username, password } = request.body;
    connection.query(
        `SELECT id AS username, password AS newPassword FROM user WHERE id='${username}'`,
        (err, res, fields) => {
            if (err) {
                return response.send(err);
            }
            if (res.length == 0)
                return response.send(
                    JSON.stringify({
                        success: false,
                        data: "No user found",
                    })
                );
            let verify = passAlgo.verify(password, res[0].newPassword);
            if (verify) {
                response.contentType("application/json");
                return response.send(
                    JSON.stringify({
                        success: true,
                        data: "Login successful!",
                    })
                );
            } else {
                response.contentType("application/json");
                return response.send(
                    JSON.stringify({
                        success: false,
                        data: "Wrong password!",
                    })
                );
            }
        }
    );
    */
};

module.exports = endpoint;