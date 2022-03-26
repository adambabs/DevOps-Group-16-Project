CREATE DATABASE finboardpern;

CREATE TABLE finboard(
  transaction_id SERIAL PRIMARY KEY,
  stock_abreviation VARCHAR(10),
  amount integer,
  buy_value decimal,
  description VARCHAR(255)
);
