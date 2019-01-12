var mysql = require('mysql');
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root", //Your username
  password: "pass", //Your password
  database: "bamazondb"
});

function promptInput(connection, callback) {
  console.log('What would you like to order?');
  inquirer
    .prompt(
      [
        {
          name: "id",
          type: "input",
          message: "Enter id: ",
          validate: function (value) {
            return !isNaN(value);
          }
        },
        {
          name: "qty",
          type: "input",
          message: "Enter quantity: ",
          validate: function (value) {
            return !isNaN(value);
          }
        }
      ]
    )
    .then(function (answer) {
      checkIfCorrectInput(connection, answer, callback);
    });
}

function checkIfCorrectInput(connection, input, callback) {
  const sql = 'select * from products where id = ?';
  const id = parseInt(input.id);
  const qty = parseInt(input.qty);
  connection.query(sql, [id], function (err, result) {
    if (err) throw err;

    if (result.length === 0) {
      console.error(`Product with id: ${id} doesn't exist.`);
      promptInput(connection, callback);
    } else if (result[0].stock_quantity < qty){
      console.error(`Product with id: ${id} doesn't sufficient quantity in stock.`);
      promptInput(connection, callback);
    } else {
      callback(id, qty);
    }
  });
}

function fulfillOrder(connection, id, qty) {
  const sql = 'update products set stock_quantity = stock_quantity - ? where id = ?';
  connection.query(sql, [qty, id], function (err, result) {
    if (err) throw err;

    connection.query('select price from products where id = ?', [id], function (err, result) {
      if (err) throw err;

      const total = result[0].price * qty;

      console.log(`Your order was successfully fulfilled! Total cost: $${total}`);
    });

    startOver(connection);
  });
}

function startOver(connection) {
  connection.query('select * from products', function (err, result) {
    if (err) throw err;
    console.table(result);

    promptInput(connection, function (id, qty) {
      fulfillOrder(connection, id, qty);
    });
  });
}

connection.connect(function (err) {
  if (err) throw err;
  startOver(connection);
})
