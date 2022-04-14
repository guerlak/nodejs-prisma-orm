import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main() {

    const res = await prisma.courses.create({
        data: {
            name: "Java fundamental course",
            description: "Java fundaments",
            duration: 320,
            teachers: {
                connectOrCreate: {
                    where: {
                        email: "guerlak@gmail.com"
                    }
                    ,
                    create: {
                        name: "Rafael",
                        email: "guerlak@gmail.com"
                    }
                }
            }
        }
    })

    console.log(res);

}
main();