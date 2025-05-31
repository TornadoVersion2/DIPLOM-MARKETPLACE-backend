/*
  Warnings:

  - You are about to alter the column `maxValue` on the `Filter` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.
  - You are about to alter the column `minValue` on the `Filter` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Decimal(65,30)`.

*/
-- AlterTable
ALTER TABLE "Filter" ALTER COLUMN "maxValue" SET DATA TYPE DECIMAL(65,30),
ALTER COLUMN "minValue" SET DATA TYPE DECIMAL(65,30);
