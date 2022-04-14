import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    await prisma.authors.create({
        data: {
            name: "Rafael Leite",
            books: {
                createMany: {
                    data: [
                        {
                            name: "Morando em RJ",
                            description: "Morando no Rio de Janeiro"
                        },
                        {
                            name: "Livro 02",
                        },
                        {
                            name: "Livro 03",
                        },
                    ]
                }
            }
        }
    })
}


main();