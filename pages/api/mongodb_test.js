const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = process.env.MONGODB_URI, 
      MONGODB_DB = process.env.DATABASE, 
      MONGODB_COLLECTION = process.env.COLLECTION_USERS; 

export default function MongoDB (req, res) {
  

  MongoClient.connect(MONGODB_URI, async (err, client) => {
    if (err) { throw new Error(err) }
    console.log('Connection succesfull')
    
    var db = client.db(MONGODB_DB);

    let data = await db.collection(MONGODB_COLLECTION)
      .findOne({username: 'WKDTEST'}, (err, data) => {
        if(err)console.log(err);  

        if(data){
          console.log(data);
          res.json(data);
        } else {
          console.log("Fail");
          res.send("Fail")
        }
    
        console.log('Closing client now...')
        client.close();
        }
      );
    
    });

}
