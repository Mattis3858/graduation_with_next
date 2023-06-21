import { MongoClient } from 'mongodb';

const uri = 'mongodb://localhost:27017';

let cachedClient = null;

async function connectToDatabase() {
  if (cachedClient && cachedClient.isConnected()) {
    console.log(cachedClient);
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  cachedClient = client;
  return client;
}

export { connectToDatabase };
