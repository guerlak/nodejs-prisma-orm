import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.courses.create({
        data: {
            duration: 3,
            name: "Javascript Course",
            description: "JS Fundamentals"
        }
    })

    console.log(result);

}
main();