/*
  Warnings:

  - You are about to drop the column `categoryId` on the `Filter` table. All the data in the column will be lost.
  - You are about to drop the column `isRanged` on the `Filter` table. All the data in the column will be lost.
  - You are about to drop the column `maxValue` on the `Filter` table. All the data in the column will be lost.
  - You are about to drop the column `minValue` on the `Filter` table. All the data in the column will be lost.
  - You are about to drop the column `value` on the `Filter_Product` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `FilterDescription` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Filter" DROP CONSTRAINT "Filter_categoryId_fkey";

-- AlterTable
ALTER TABLE "Filter" DROP COLUMN "categoryId",
DROP COLUMN "isRanged",
DROP COLUMN "maxValue",
DROP COLUMN "minValue",
ADD COLUMN     "value" INTEGER DEFAULT 0;

-- AlterTable
ALTER TABLE "FilterDescription" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "measureName" TEXT;

-- AlterTable
ALTER TABLE "Filter_Product" DROP COLUMN "value";

-- AddForeignKey
ALTER TABLE "FilterDescription" ADD CONSTRAINT "FilterDescription_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
