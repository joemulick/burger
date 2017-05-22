// Import MySQL connection.
var connection = require("../config/connection.js");

// // Helper function for SQL syntax.
 function printQuestionMarks(num) {
   var arr = [];

   for (var i = 0; i < num; i++) {
     arr.push("?");
  }

   return arr.toString();
 }

 // Helper function for SQL syntax.
 function objToSql(ob) {
   var arr = [];

   for (var key in ob) {
     if (Object.hasOwnProperty.call(ob, key)) {
       arr.push(key + "=" + ob[key]);
     }
   }

   return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burger_table;";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(cols, vals, cb) {
    var queryString = "INSERT INTO burger_table  ;";


    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  updateOne: function(objColVals, condition, cb) {
    var queryString = "UPDATE "

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
}; // End orm

// Export the orm object for the model (cat.js).
module.exports = orm;

