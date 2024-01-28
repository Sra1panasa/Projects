step1:
install mysql database:
download link use without sign up option - https://dev.mysql.com/downloads/file/?id=526408
use full option during setup so that you will get database server and connector tool mysql workbench
============================
step2:
login to mysql workbench.run below queries
CREATE DATABASE vacation;
USE vacation;
CREATE TABLE vacation.destinations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    location VARCHAR(255),
    average_cost DECIMAL(10, 2),
    rating DECIMAL(3, 2),
    destination_type VARCHAR(255),
    budget_range VARCHAR(255)
);

INSERT INTO vacation.destinations (name, description, average_cost, location, rating) 
VALUES 
    ('Phuket, Thailand', 'Beautiful Thai island with vibrant nightlife', 3000.00, 'Andaman Sea', 4.20),
    ('Maldives', 'Tropical paradise with coral reefs', 5000.00, 'Indian Ocean', 4.80),
    ('Maui, Hawaii', 'Stunning beaches and volcanic landscapes', NULL, 'Pacific Ocean', 4.50);

check the results with select query
select * from vacation.destinations;

===================
step3:
create anaconda env and install libraries from requirement.txt file
run app.py api should be up and running
run index.html file application should up and running
