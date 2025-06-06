import { PrismaClient } from '../src/generated/prisma';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  const jobsPath = path.join(__dirname, '../jobs.json');
  const jobsRaw = fs.readFileSync(jobsPath, 'utf-8');
  const jobs = JSON.parse(jobsRaw);

  for (const job of jobs) {
    await prisma.job.create({
      data: {
        id: job.id.toString(),
        company: job.company,
        position: job.position,
        role: job.role,
        level: job.level,
        postedAt: job.postedAt,
        contract: job.contract,
        location: job.location,
        languages: job.languages.map((l: any) => typeof l === 'string' ? l : l.name),
        tools: job.tools,
        userId: job.userId || "some-default-user-id",
      },
    });
  }
  console.log('Jobs imported!');
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());