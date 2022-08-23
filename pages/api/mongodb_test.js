import { v4 as uuidv4 } from 'uuid';
import clientPromise from '../../lib/mongodb';
const   MONGODB_DB = process.env.DATABASE_ALPHA, 
        MONGODB_COLLECTION_USERS = process.env.COLLECTION_USERS; 

export default async function MongoDB (req, res) {
  
  const client = await clientPromise;
  const db = client.db(MONGODB_DB);
  await db.collection(MONGODB_COLLECTION_USERS)
          .insertOne({id: uuidv4(),  username: 'TESTOBJECT', createdAt: new Date()}, (err, data) => {
            if (err) console.log(err);
            res.send(data);
          });
}
