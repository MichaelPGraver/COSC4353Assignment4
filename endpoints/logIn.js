let connection = require("../database");

const endpoint = function (request, response) {
    
    let {username, password } = request.body;
    connection.query(
        `SELECT username, password, firstlog FROM user WHERE username ='${username}'`,
        (err, res, fields) => {
            if (err) {
                return response.send(err);
            }
            if (res.length == 0){
                return response.send(
                    JSON.stringify({
                        success: false,
                        data: "successful login!",
                    })
                );}
            if (res[0].password == password && res[0].firstlog == "0") {//first login
                connection.query(
                    `UPDATE user 
                    SET firstlog = '1'
                    WHERE username = '${username}'`,
                    (err, res, fields) => {
                        if (err) {
                            console.log("Update unsuccessful");
                        }
                        console.log("Update successful");
                    }
                );
                response.contentType("application/json");
                return response.send(
                    JSON.stringify({
                        success: true,
                        data: "Login successful!",
                        firstlog: "1",
                    })
                );
            } else if(res[0].password == password && res[0].firstlog == "1") {//not first login
                connection.query(
                    `SELECT address1 FROM clientinformation WHERE username ='${username}'`,
                    (err, res, fields) => {
                        if (err) {
                            return response.send(err)
                        }
                        else {
                            response.contentType("application/json");
                            return response.send(
                                JSON.stringify({
                                    success: true,
                                    data: "Login successful!",
                                    firstlog: "0",
                                    address: res[0].address1,
                                })
                            )
                        }
                    }
                )
            } else {
                console.log(password)
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
    
};

module.exports = endpoint;