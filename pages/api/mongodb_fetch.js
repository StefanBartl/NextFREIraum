// import User from '../../models/user';
// import mongoose from 'mongoose';

const MongoClient = require('mongodb').MongoClient;

export default function MongoDB (req, res) {
  

  MongoClient.connect(process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb+srv://wkdsteve:020290Ab@freiraum.xvduccp.mongodb.net/FREIraum?retryWrites=true&w=majority', async (err, client) => {
    if (err) { throw new Error(err) }
    console.log('Connection succesfull')
    
    var db = client.db("FREIraum");

        db.collection('Alpha')
          .findOne({username: 'WKDTEST'}, (err, data) => {
            if(err)console.log(err);  
            console.log(data);
            }
          );

    console.log('Callback end, closing client now...')
    client.close();
    });


  // try {
  //   mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI || 'mongodb+srv://wkdsteve:020290Ab@freiraum.xvduccp.mongodb.net/FREIraum?retryWrites=true&w=majority'
  //   , () =>{
  //     console.log("connected")
  //     const db = mongoose.connection;
  //     User.find({username: 'WKDTEST'})
  //         .exec((err, data) => {
  //             if(err)return console.log(err);
  //             console.log(data);
  //             res.json({1: data.password})
  //       });
  //   });
  // } catch (error) {
  //   console.log("could not connect");
  //   console.log(error);
  // };

}
