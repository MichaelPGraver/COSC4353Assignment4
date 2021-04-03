const { response } = require("express");
let connection = require("../database");

const endpoint = async function (request, response){
    let { fullName, Address1, Address2, City, State, Zipcode, username } = request.body;
    console.log(fullName, Address1, Address2, City, State, Zipcode, username);
    connection.query(
        `UPDATE clientinformation
        SET fullname = '${fullName}', address1 = '${Address1}', address2 = '${Address2}', city = '${City}', state = '${State}', zipcode = '${Zipcode}'
        WHERE username = '${username}'`,
        (err, res, fields) => {
            if (err) {
                return response.send(err);
            }
            return response.send(
                JSON.stringify({
                    success: true,
                    data: Address1,
                })
            );
        }
    );
}

module.exports = endpoint;