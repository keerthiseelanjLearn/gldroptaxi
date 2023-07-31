var port = process.env.PORT || 3000;
const express = require('express')
const app = express()
// importing mysql package
const mysql = require('mysql');
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next(); 
});

const db_config = {
    host: '217.21.87.103',
    user: 'u746981494_gldroptaxi',
    password: '3dVTQUnVe5bQeLm',
    database: 'u746981494_gldroptaxi',
  }
  
  // parse various different custom JSON types as JSON
  app.use(bodyParser.json({limit: '500mb'}))
  
//   mysqlConnection.connect((err)=>{
//     if(!err)
//     console.log('DB is connected')
//     else
//     console.log('DB connection is failed \n Error: ' + JSON.stringify(err, undefined, 2));

// });


function handleDisconnect() {
  global.connection = mysql.createConnection(db_config); // Recreate the connection, since
  // the old one cannot be reused.

  connection.connect(function (err) {              // The server is either down
    if (err) {                                     // or restarting (takes a while sometimes).
      console.log('error when connecting to db:', err);
      setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
    } else {
      console.log("db is connected")
    }                                    // to avoid a hot loop, and to allow our node script to
  });                                     // process asynchronous requests in the meantime.
  // If you're also serving http, display a 503 error.
  connection.on('error', function (err) {
    
    if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
    
      handleDisconnect();                         // lost due to either server restart, or a
    } else {                                      // connnection idle timeout (the wait_timeout
      handleDisconnect();                              // server variable configures this)
    } 
  });
}

handleDisconnect();

const login = require("./routes/login")
app.use('/login', login);

const register = require("./routes/register")
app.use('/register', register);

const user = require("./routes/user")
app.use('/user', user);

app.listen(port, () => { console.log(`App is listening port number:${port}`) })
