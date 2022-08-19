import crypto from 'crypto';
import { v4 as uuidv4 } from 'uuid';

 import clientPromise from './mongodb';
 const MONGODB_DB = process.env.DATABASE, 
       MONGODB_COLLECTION = process.env.COLLECTION_USERS; 

export async function createUser({ username, password }) {
  // Here you should create the user and save the salt and hashed password (some dbs may have
  // authentication methods that will do it for you so you don't have to worry about it):
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  const user = {
    id: uuidv4(),
    createdAt: Date.now(),
    username,
    hash,
    salt,
  }

  console.log('user.js create user: ', user);

  const client = await clientPromise;
  const db = client.db(MONGODB_DB);
  await db.collection(MONGODB_COLLECTION).insertOne(user);

  return { username, createdAt: Date.now() }
}

// Here you should lookup for the user in your DB
export async function findUser({ username }) {
  
  const client = await clientPromise;
  const db = client.db(MONGODB_DB);
  await db.collection(MONGODB_COLLECTION).find({username: username}, (err, data) => {
    if(err) console.log(err);
    if(data.username === username) return console.log(data.username);
    return console.log("Username don't match!");
  });

}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}