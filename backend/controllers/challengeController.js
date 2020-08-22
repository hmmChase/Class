import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getChallenges = async (req, res, next) => {
  const challenges = await prisma.challenge.findMany({});

  return res.json(challenges);
};
