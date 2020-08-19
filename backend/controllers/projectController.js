const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

exports.getProjects = async (req, res, next) => {
  const projectRecords = await prisma.project.findMany({
    orderBy: { id: 'desc' },
    include: { author: true }
  });

  return res.json(projectRecords);
};

exports.create = async (req, res, next) => {
  const { githubLink, additionalLink, body } = req.body;

  const projectRecord = await prisma.question.create({
    data: {
      githubLink,
      additionalLink,
      body,
      author: { connect: { id: authorId } }
    }
  });

  return res.json(projectRecord);
};
