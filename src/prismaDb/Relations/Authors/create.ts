import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    const res = await prisma.authors.create({
        data: {
            name: "Mari Pieroni",
            books: {
                create: {
                    name: "Morando em PT"
                }
            }
        }
    })

    console.log(res);

}
main();