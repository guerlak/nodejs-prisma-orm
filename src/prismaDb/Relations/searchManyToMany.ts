import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    const res = await prisma.courses.findMany({
        include: {
            teachers: true
        }
    })

    console.log(res);

}
main();