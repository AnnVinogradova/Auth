
import { PrismaClient } from '@prisma/client';
import fetch from 'node-fetch';

const prisma = new PrismaClient({ log: ['query'] });

export default async function handler(req, res) {
  const { slug } = req.query,
    [table, id] = slug;

  console.debug('>> ', req.method, ' запрос на', req.url, 'slug =', { table, id });

  if (!['photos'].includes(slug[0])) {
    return res.status(404).send({ error: 'wrong table' });
  }
  try {
    switch (req.method) {
      case 'GET':
        if (table === 'photo') {
          return res.status(200).json(await prisma.photo.findMany());
        } else if (table === 'photos') {
          const photos = await (await fetch('https://jsonplaceholder.typicode.com/photos')).json();
          return res.status(200).json(photos);
        }
        break;
    }
  } catch (error) {
    console.log(__filename, error);
    res.status(500).send({ error });
  }
}