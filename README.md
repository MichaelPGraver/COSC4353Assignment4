# COSC4353Assignment4
Assignment 4 for COSC4353

For the sake of this assignment there are hard coded values for the correct username and password. The username is "cosc4353" and the password is "password123". Using these credentials will display a successful login notification and progress you further into the website while using the wrong credentials will display an uncuccesful login and stop you from going further into the website. We could not come up with a good way to move variables in between components and if we did it would've been overwrtitten by DB in the next assignment so that is the reason for the hard coded username and password.


database instructions: 
1. run the sql code to create the database with mysql
2. With the current code, the host is localhost, user is "root", password is "password", database name is "appdb", and port is 3306. If unable to create it under these conditions, feel free to change the database.js file with the code that creates the connection.


Instructions to run :
1. open terminal
2. cd to the project folder
3. type "npm install"
4. type "npm install mysql"
5. type "node server"
6. type "npm start" to run project
7. Those should be the only packages to run the code correctly but if it doesn't work all of the packages we installed are in the package.json file with the respective versions
