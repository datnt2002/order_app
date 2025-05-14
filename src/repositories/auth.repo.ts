import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

const findAccountByEmail = async (email: string) => {
  const account = await prisma.account.findUnique({
    where: { email },
  });

  return account;
};

const findUserByAccountId = async (accountId: string) => {
  const user = await prisma.user.findUnique({
    where: { accountId },
  });

  return user;
};

const findUserById = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  return user;
};

export { findUserById, findAccountByEmail, findUserByAccountId };
