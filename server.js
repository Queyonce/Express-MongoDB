require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

var queryString = 'mongodb+srv://queila:z94ygOv94lRWqrzv@cluster0.j8l2n.mongodb.net/?retryWrites=true&w=majority'

console.log(queryString);

mongoose.connect(queryString, { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;

// try{
//   const { MongoClient, ServerApiVersion } = require('mongodb');
//   const uri = "mongodb+srv://queila:ZN4gLpx0mcGgZVnl@cluster0.j8l2n.mongodb.net/?retryWrites=true&w=majority";
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
//   client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
//   });

// }catch(e){
//   e => console.log(e)
// }


const app = express();
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'))

app.set('views','./src/views');
app.set('view engine','ejs');
app.use(routes);

  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
