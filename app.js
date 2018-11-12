const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/getUsers', (req, res) => {
    
    var mysql = require('mysql')
    var con = mysql.createConnection({
      host     : '10.39.104.239',
      port     : '3306',
      user     : 'athishay',
      password : 'root',
      database : 'reviews'
    });
    
    con.connect(function(err) {
        if (err) {
          debugger;
          throw err
        };
        console.log("Connected!");
        var sql = "INSERT INTO user_review (reviewer_name, details) VALUES (" + req.query.id + ", " + req.query.id + ")";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });    
    res.send("Custom");
   // res.send(JSON.stringify({ a: 1 }));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))