// DB

CREATE DATABASE user_form_db;

USE user_form_db;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(100) NOT NULL,
    lastName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    birthDay DATE NOT NULL,
    occupation VARCHAR(100) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    profileBase64 LONGTEXT,  -- ใช้ LONGTEXT เพื่อเก็บ Base64 ขนาดใหญ่
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
