DROP DATABASE IF EXISTS bamazondb;
CREATE DATABASE bamazondb;
USE bamazondb;


CREATE TABLE products(
  id INTEGER(255) AUTO_INCREMENT NOT NULL,
  product VARCHAR(100),
  department VARCHAR(100),
  price integer(255),
  stock_quantity integer(255),
  PRIMARY KEY (id)
);
INSERT INTO products (id, product, department, price, stock_quantity) values (15, 'ION speaker', 'Electronics', 99, 23);
INSERT INTO products (id, product, department, price, stock_quantity) values (18, 'iPad mini', 'Electronics', 399, 34);
INSERT INTO products (id, product, department, price, stock_quantity) values (12, 'JavaScript', 'Books', 23, 55);
INSERT INTO products (id, product, department, price, stock_quantity) values (23, 'CSS/HTML', 'Books', 18, 47);
INSERT INTO products (id, product, department, price, stock_quantity) values (93, 'Gold Earrings', 'Jewelry', 119, 15);
INSERT INTO products (id, product, department, price, stock_quantity) values (28, 'Diamond Ring', 'Jewelry', 2999, 8);
INSERT INTO products (id, product, department, price, stock_quantity) values (76, 'Black Dress', 'Clothing', 55, 43);
INSERT INTO products (id, product, department, price, stock_quantity) values (17, 'Skinny Jeans', 'Clothing', 39, 70);
INSERT INTO products (id, product, department, price, stock_quantity) values (11, 'Sandals', 'Shoes', 32, 44);
INSERT INTO products (id, product, department, price, stock_quantity) values (24, 'Boots', 'Shoes', 89, 67);
INSERT INTO products (id, product, department, price, stock_quantity) values (96, 'Mini Fridge', 'Appliance', 129, 5);
INSERT INTO products (id, product, department, price, stock_quantity) values (25, 'Microwave', 'Appliance', 49, 28);

SELECT * FROM products;