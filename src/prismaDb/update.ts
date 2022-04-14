import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {
    const res = await prisma.courses.update({
        where: {
            id: "9087d944-ed99-4e35-ac1d-95273a6d0d18"
        },
        data: {

            description: "Prisma the Basic",
            duration: 15
        }
    })
    console.log(res);
}
main();