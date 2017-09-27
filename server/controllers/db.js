const oracledb = require('oracledb');

var connAttrs =  {
   user          : "system",
   password      : "Welcome1#",
   connectString : "localhost:1521/PDB1.gse00013232.oraclecloud.internal"
}

module.exports = {
   test: function(req,res){
      oracledb.getConnection(connAttrs, function(err, connection){
         if (err) {
            console.error(err);
            throw err;
         }
         connection.execute("SELECT * FROM WORLD_DEVELOPMENT_INDICATORSdfsg", function(err, result){
            if (err) {
               console.error("ran into following error", err);
               res.end("SQL Statement may be jacked up bro. Try reviewing it before you run it! Or it might be the database...or the connection. Good Luck!")

            } else{
               console.log(result.rows);
               res.contentType('application/json').status('200');
               res.send(JSON.stringify(result.rows));
            }});
         });
   }
}
