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

 Date: 30/05/2025 12:09:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for vehicle_types
-- ----------------------------
DROP TABLE IF EXISTS `vehicle_types`;
CREATE TABLE `vehicle_types`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `wheels` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of vehicle_types
-- ----------------------------
INSERT INTO `vehicle_types` VALUES (1, 'Hackback', 4);
INSERT INTO `vehicle_types` VALUES (2, 'SUV', 4);
INSERT INTO `vehicle_types` VALUES (3, 'Sedan', 4);
INSERT INTO `vehicle_types` VALUES (4, 'Sports', 2);

SET FOREIGN_KEY_CHECKS = 1;
