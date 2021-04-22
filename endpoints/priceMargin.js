let connection = require("../database");

const endpoint = function (request,response) {
    let margin = 0;
    connection.query(
        `SELECT state FROM client_information WHERE username = '${request.username}'`,
        function(error, rows, fields){
            if(!!error){
                console.log("Query error getting state");
            } else {
                if (Object.keys(rows).length !== 0){
                    if (rows[0].state == "TX") {
                        margin += .02;
                    } else {
                        margin += .04
                    }

                    connection.query(
                        `SELECT EXISTS(SELECT * FROM fuelqote WHERE username = '${request.username}')`,
                        function(error, rows, fields) {
                            if (!!error){
                                console.log("Query error checking history");
                            } else {
                                let data = JSON.stringify(rows[0]);
                                data = data[data.length - 2];
                                if (data == 0){

                                } else {
                                    margin -= .01;
                                }

                                response.contentType("application/json");
                                response.json(margin);
                            }
                        }
                    );
                } else {
                    console.log("No fuel quote history");
                }
            }
        }
    );
};

module.exports = endpoint;