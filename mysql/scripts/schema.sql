-- CREATE DATABASE IF NOT EXISTS transactions;
-- USE transactions;

-- CREATE TABLE IF NOT EXISTS transactions (
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     amount INT,
--     description VARCHAR(255)
-- );

-- CREATE USER IF NOT EXISTS 'expense'@'%' IDENTIFIED BY 'ExpenseApp@1';
-- GRANT ALL ON transactions.* TO 'expense'@'%';
-- FLUSH PRIVILEGES;


-- Create database if not exists
CREATE DATABASE IF NOT EXISTS transactions;
USE transactions;

-- Create table if not exists
CREATE TABLE IF NOT EXISTS transactions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    amount INT,
    description VARCHAR(255)
);

-- Create user and grant privileges (depends on MySQL version)
-- Use this if your MySQL supports IF NOT EXISTS with CREATE USER
CREATE USER IF NOT EXISTS 'expense'@'%' IDENTIFIED BY 'ExpenseApp@1';

-- OR use this if IF NOT EXISTS is not supported
-- CREATE OR REPLACE USER 'expense'@'%' IDENTIFIED BY 'ExpenseApp@1';

-- Grant privileges
GRANT ALL PRIVILEGES ON transactions.* TO 'expense'@'%';
FLUSH PRIVILEGES;
