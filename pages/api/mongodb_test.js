import clientPromise from '../../lib/mongodb';
const MONGODB_DB = process.env.DATABASE, 
      MONGODB_COLLECTION = process.env.COLLECTION_USERS; 

export default async function MongoDB (req, res) {
  
  const client = await clientPromise;
  const db = client.db(MONGODB_DB);
  let data = await db.collection(MONGODB_COLLECTION).findOne({username: 'WKDTEST'});
  res.json(data);

}
