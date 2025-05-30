/*
 Navicat Premium Data Transfer

 Source Server         : R-localhost
 Source Server Type    : MySQL
 Source Server Version : 50738 (5.7.38-log)
 Source Host           : localhost:3307
 Source Schema         : rental-point

 Target Server Type    : MySQL
 Target Server Version : 50738 (5.7.38-log)
 File Encoding         : 65001

 Date: 30/05/2025 12:10:00
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for vehicles
-- ----------------------------
DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE `vehicles`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` int(11) NULL DEFAULT NULL,
  `model` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `type_id`(`type_id`) USING BTREE,
  CONSTRAINT `type_id` FOREIGN KEY (`type_id`) REFERENCES `vehicle_types` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of vehicles
-- ----------------------------
INSERT INTO `vehicles` VALUES (1, 1, 'Maruti Swift');
INSERT INTO `vehicles` VALUES (2, 1, 'Hyundai i10 Nios');
INSERT INTO `vehicles` VALUES (3, 1, 'Maruti Wagon-R');
INSERT INTO `vehicles` VALUES (4, 2, 'Hyundai Creta');
INSERT INTO `vehicles` VALUES (5, 2, 'Hyundai Alcazar');
INSERT INTO `vehicles` VALUES (6, 2, 'Tata Harrier');
INSERT INTO `vehicles` VALUES (7, 3, 'Hyundai Verna');
INSERT INTO `vehicles` VALUES (8, 3, 'Honda CIty');
INSERT INTO `vehicles` VALUES (9, 3, 'Maruti Swift Dzire');
INSERT INTO `vehicles` VALUES (10, 4, 'TVS Apache');
INSERT INTO `vehicles` VALUES (11, 4, 'Yamaha FZS-V3');
INSERT INTO `vehicles` VALUES (12, 4, 'Kawasaki Ninja ZX - 10R');

SET FOREIGN_KEY_CHECKS = 1;
