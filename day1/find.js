var MongoClient = require('mongodb').MongoClient;


var url = "mongodb://localhost:27017/box1";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("box1");
    //Find all documents in the customers collection:
    dbo.collection("customers").find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
      db.close();
    });
  });
  
