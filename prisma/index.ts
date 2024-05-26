import { PrismaClient } from "@prisma/client/extension";

export const prisma = new PrismaClient();

async function main() {}

main()
  .catch(async (e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })