import { password } from "bun";
import { PrismaClient } from "../src/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await password.hash("123456");
  const account = await prisma.account.create({
    data: {
      email: "trongdat211002@gmail.com",
      password: hashedPassword,
    },
  });

  await prisma.user.create({
    data: {
      firstName: "Dat",
      lastName: "Nguyen",
      accountId: account.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
