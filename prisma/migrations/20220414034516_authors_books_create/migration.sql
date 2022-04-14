/*
  Warnings:

  - Made the column `fk_teachers_id` on table `courses` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "courses_fk_teachers_id_fkey";

-- AlterTable
ALTER TABLE "courses" ALTER COLUMN "fk_teachers_id" SET NOT NULL;

-- CreateTable
CREATE TABLE "authors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "authors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "books" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "fk_authors_id" TEXT NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "authors_name_key" ON "authors"("name");

-- CreateIndex
CREATE UNIQUE INDEX "books_name_key" ON "books"("name");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_teachers_id_fkey" FOREIGN KEY ("fk_teachers_id") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "books" ADD CONSTRAINT "books_fk_authors_id_fkey" FOREIGN KEY ("fk_authors_id") REFERENCES "authors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
