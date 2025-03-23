/*
  Warnings:

  - You are about to drop the column `contactDetails` on the `School` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `School` table. All the data in the column will be lost.
  - Added the required column `phone` to the `School` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "School" DROP COLUMN "contactDetails",
DROP COLUMN "phoneNumber",
ADD COLUMN     "phone" TEXT NOT NULL;
