/*
  Warnings:

  - You are about to drop the column `FilterId` on the `Filter_Product` table. All the data in the column will be lost.
  - Added the required column `filterId` to the `Filter_Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Filter_Product" DROP CONSTRAINT "Filter_Product_FilterId_fkey";

-- AlterTable
ALTER TABLE "Filter_Product" DROP COLUMN "FilterId",
ADD COLUMN     "filterId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Filter_Product" ADD CONSTRAINT "Filter_Product_filterId_fkey" FOREIGN KEY ("filterId") REFERENCES "Filter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
