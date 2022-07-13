const expresss = require("express");
const MongoClient = require("mongodb").MongoClient;

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost:27017/test";

const app = expresss();
const port = 3000;

app.get("/", (req, res) => {
  MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, db) => {
    if (err) {
      res.status(500).send("BOOM: " + err);
    } else {
      res.send("Connected to MongoDB!!!!! :D");
      db.close();
    }
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
