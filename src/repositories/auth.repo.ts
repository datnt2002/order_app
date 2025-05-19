import prisma from "../libs/prismaInit";

const findAccountByEmail = async (email: string) => {
  const account = await prisma.account.findUnique({
    where: { email },
  });

  if (!account) {
    throw new Error("Account not found");
  }

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

export { findAccountByEmail, findUserByAccountId, findUserById };
