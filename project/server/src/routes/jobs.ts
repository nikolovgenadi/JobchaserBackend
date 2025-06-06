import { Router } from 'express';
import { PrismaClient } from '../generated/prisma';
import { authenticateToken } from '../middleware/auth';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const jobs = await prisma.job.findMany();
  res.json(jobs);
});

router.get('/my', authenticateToken, async (req, res) => {
  // @ts-ignore
  const userId = req.user.userId;
  const jobs = await prisma.job.findMany({ where: { userId } });
  res.json(jobs);
});

router.post('/', authenticateToken, async (req, res) => {
  // @ts-ignore
  const userId = req.user.userId;
  const { company, position, role, level, postedAt, contract, location, languages, tools } = req.body;
  const job = await prisma.job.create({
    data: {
      company,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
      userId,
    },
  });
  res.status(201).json(job);
});

router.post('/watchlist', authenticateToken, async (req, res) => {
  // @ts-ignore
  const userId = req.user.userId;
  const { company, position, location } = req.body;

  const existingJob = await prisma.job.findFirst({
    where: {
      userId,
      company,
      position,
      location,
    },
  });

  if (existingJob) {
    return res.status(409).json({ message: "Job already in your watchlist." });
  }

  const { role, level, postedAt, contract, languages, tools } = req.body;
  const job = await prisma.job.create({
    data: {
      company,
      position,
      role,
      level,
      postedAt,
      contract,
      location,
      languages,
      tools,
      userId,
    },
  });
  res.status(201).json(job);
});

export default router;