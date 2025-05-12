-- CreateEnum
CREATE TYPE "Role" AS ENUM ('GUEST', 'USER', 'MANAGER', 'ADMIN', 'OWNER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "roles" "Role"[] DEFAULT ARRAY['USER']::"Role"[];
