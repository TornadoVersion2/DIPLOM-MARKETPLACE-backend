/*
  Warnings:

  - You are about to drop the column `description` on the `Filter` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Filter` table. All the data in the column will be lost.
  - Added the required column `descriptionId` to the `Filter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Filter" DROP COLUMN "description",
DROP COLUMN "name",
ADD COLUMN     "descriptionId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Filter_Product" ALTER COLUMN "value" SET DEFAULT 0;

-- CreateTable
CREATE TABLE "FilterDescription" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "FilterDescription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Filter" ADD CONSTRAINT "Filter_descriptionId_fkey" FOREIGN KEY ("descriptionId") REFERENCES "FilterDescription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
