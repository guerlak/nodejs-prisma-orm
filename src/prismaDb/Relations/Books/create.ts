import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    const res = await prisma.books.create({
        data: {
            name: "Curso de Javascript",
            description: "Fundamentos JS",
            fk_authors_id: "554195fd-4a64-4790-8726-37bae59fef98"
        }
    })

    console.log(res);

}
main();