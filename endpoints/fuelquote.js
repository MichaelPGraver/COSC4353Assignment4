let connection = require("../database");

const endpoint = async function (request, response){
    let {Gallons_requested, Delivery_date, Suggested_price, Total_amount_due} = request.body;
    let address = localStorage.getItem("address");

    connection.query(
        `INSERT INTO fuelquote VALUES ("${request.username}","${Gallons_requested}", "${address}", "${Delivery_date}", "${Suggested_price}", "${Total_amount_due}")`,
        (error, res, fields) => {
            if (err){
                console.log("Query error inserting into fuelquote")
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
};


module.exports = endpoint;