DROP DATABASE IF EXISTS `appdb`;
CREATE DATABASE `appdb`; 
USE `appdb`;

CREATE TABLE `fuelquote` (
  `username` varchar(45) NOT NULL,
  `gallonsrequested` int NOT NULL,
  `deliveryaddress` varchar(100) NOT NULL,
  `deliverydate` date NOT NULL,
  `price` int NOT NULL,
  `amountdue` int NOT NULL,
  PRIMARY KEY (`username`)
);


CREATE TABLE `clientinformation` (
  `username` varchar(45) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `address1` varchar(100) NOT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `state` varchar(2) NOT NULL,
  `zipcode` int NOT NULL,
  PRIMARY KEY (`username`)
);


CREATE TABLE `fuelquote` (
  `username` varchar(45) NOT NULL,
  `gallonsrequested` int NOT NULL,
  `deliveryaddress` varchar(100) NOT NULL,
  `deliverydate` date NOT NULL,
  `price` int NOT NULL,
  `amountdue` int NOT NULL,
  PRIMARY KEY (`username`)
);

