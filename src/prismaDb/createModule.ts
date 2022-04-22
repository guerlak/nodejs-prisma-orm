
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.modules.create({
        data: {
            name: "Module 01",
            description: "Primeiro Modulo"
        }
    });

    console.log(result)
}

main();