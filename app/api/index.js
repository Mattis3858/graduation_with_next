// const { PrismaClient } = require('@prisma/client');

// const prisma = new PrismaClient();

// async function main() {
//   // ... you will write your Prisma Client queries here
//   const allUsers = await prisma.reservation.findMany();
//   console.log(allUsers);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URI = process.env.SUPABASE_URI;
const SUPABASE_SECRET = process.env.SUPABASE_SECRET;

const supabase = createClient(SUPABASE_URI, SUPABASE_SECRET);

export default supabase;
