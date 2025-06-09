/*
  Warnings:

  - Made the column `value` on table `Filter` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Filter" ALTER COLUMN "value" SET NOT NULL;

-- AlterTable
ALTER TABLE "Filter_Product" ADD COLUMN     "value" INTEGER NOT NULL DEFAULT 0;
