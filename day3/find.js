var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Databases");
  dbo.collection("table_1").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result[0].name);
    db.close();
  });
});
