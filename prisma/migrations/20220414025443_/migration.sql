/*
  Warnings:

  - A unique constraint covering the columns `[fk_teachers_id]` on the table `courses` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "teachers_name_key";

-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_teachers_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_teachers_id_key" ON "courses"("fk_teachers_id");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_teachers_id_fkey" FOREIGN KEY ("fk_teachers_id") REFERENCES "teachers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
