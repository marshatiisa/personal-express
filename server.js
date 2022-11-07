const express = require('express')
const app = express()
const bodyParser = require('body-parser')
// const MongoClient = require('mongodb').MongoClient

var db, collection;

// const url = "mongodb+srv://marshatiisa:ZjTYmNmnQQtcz5@cluster0.8gmpf0f.mongodb.net/?retryWrites=true&w=majority"
// const dbName = "coinFlip";

app.listen(3030, () => {
    // MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (error, client) => {
    //     if(error) {
    //         throw error;
    //     }
    //     db = client.db(dbName);
    //     console.log(db)
    //     console.log("Connected to `" + dbName + "`!");
    // });
});

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index.ejs')
   
})

app.post('/flip',(req,res) => {
  let userChoice = req.body.userChoice
  let flipResult = Math.ceil(Math.random()*2) === 1 ? 'heads' : 'tails'

  res.render('index.ejs', {userChoice:userChoice, flipResult:flipResult})
})

// if('flip' in params){
//   if(params['flip']=== 'heads' || params['flip']=== 'tails'){
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     let flipCoin = Math.ceil(Math.random()*2) === 1 ? 'heads' : 'tails'
//     const objToJson = {
  
//       flip: flipCoin
//     }
//     res.end(JSON.stringify(objToJson));
//   }
//   else if(params['flip'] !== 'tails'|| params['flip'] !== 'heads'){
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     const objToJson = {
//       name: "unknown",
//       status: "unknown",
//       currentOccupation: "unknown",
//       flip: "[Enter either heads or tails]"
//     }
//     res.end(JSON.stringify(objToJson));
//   }
// }

