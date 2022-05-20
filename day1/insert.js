var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/box1";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("box1");
    var myobj = { name: "new", address: "irap" };
    dbo.collection("customers").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });