/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.7.30 : Database - roles
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`roles` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `roles`;

/*Table structure for table `role` */

DROP TABLE IF EXISTS `role`;

CREATE TABLE `role` (
  `roleID` int(11) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `gender` varchar(10) DEFAULT NULL,
  `school` varchar(10) DEFAULT NULL,
  `neigongyanxiu` varchar(20) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `server` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`roleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `skin` */

DROP TABLE IF EXISTS `skin`;

CREATE TABLE `skin` (
  `sID` int(11) NOT NULL AUTO_INCREMENT,
  `roleID` int(11) DEFAULT NULL,
  `name` varchar(20) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  `quality` varchar(10) DEFAULT NULL,
  `photo` text,
  PRIMARY KEY (`sID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `threeskills` */

DROP TABLE IF EXISTS `threeskills`;

CREATE TABLE `threeskills` (
  `tsID` int(11) NOT NULL AUTO_INCREMENT,
  `roleID` int(11) DEFAULT NULL,
  `dataInfo` longtext,
  `wuxue` varchar(20) DEFAULT NULL,
  `skill` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`tsID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `treasure` */

DROP TABLE IF EXISTS `treasure`;

CREATE TABLE `treasure` (
  `tID` int(11) NOT NULL,
  `roleID` int(11) DEFAULT NULL,
  `dataInfo` longtext,
  `skill` varchar(20) DEFAULT NULL,
  `is750` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`tID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Table structure for table `treasureprop` */

DROP TABLE IF EXISTS `treasureprop`;

CREATE TABLE `treasureprop` (
  `pID` int(11) NOT NULL AUTO_INCREMENT,
  `tID` int(11) DEFAULT NULL,
  `prop` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`pID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
