var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb://localhost:27017/box2"

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("box2");
    var myobj = { name: "new", address: "irap" };
    dbo.collection("table").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });