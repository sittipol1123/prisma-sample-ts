/*
  Warnings:

  - You are about to drop the `premission` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `rolehaspremossion` DROP FOREIGN KEY `RoleHasPremossion_premissionId_fkey`;

-- DropTable
DROP TABLE `premission`;

-- CreateTable
CREATE TABLE `Permission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoleHasPremossion` ADD CONSTRAINT `RoleHasPremossion_premissionId_fkey` FOREIGN KEY (`premissionId`) REFERENCES `Permission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
