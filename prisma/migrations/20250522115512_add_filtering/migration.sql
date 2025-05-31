-- CreateTable
CREATE TABLE "Filter" (
    "id" SERIAL NOT NULL,
    "description" TEXT,
    "name" TEXT NOT NULL,
    "possibleValue" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Filter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filter_Product" (
    "id" SERIAL NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "FilterId" INTEGER NOT NULL,

    CONSTRAINT "Filter_Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Filter_name_key" ON "Filter"("name");

-- AddForeignKey
ALTER TABLE "Filter" ADD CONSTRAINT "Filter_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filter_Product" ADD CONSTRAINT "Filter_Product_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Filter_Product" ADD CONSTRAINT "Filter_Product_FilterId_fkey" FOREIGN KEY ("FilterId") REFERENCES "Filter"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
