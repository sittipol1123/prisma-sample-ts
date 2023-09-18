-- CreateTable
CREATE TABLE `Premission` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RoleHasPremossion` (
    `roleId` INTEGER NOT NULL,
    `premissionId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`roleId`, `premissionId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RoleHasPremossion` ADD CONSTRAINT `RoleHasPremossion_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RoleHasPremossion` ADD CONSTRAINT `RoleHasPremossion_premissionId_fkey` FOREIGN KEY (`premissionId`) REFERENCES `Premission`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
