# Using MySQL 

## Start MySQL Services

### Windows

Start the MySQL service

### Linux

```shell
sudo service mysql start
```

### MacOS

Go to Settings> Mysql>start MySQL service

or (if istalled via Homebrew)
```shell
mysqld.service st
art
```
## Log in to MySQL as root

Without root password>

```shell
mysql -u root
mysql>
```

with root password-

```shell
mysql -u root -p
Enter Password
```

## CreateDB, userm Grant access

```sql
CREATE DATABASE mytestdb;
CREATE USER myuser IDENTIFIED BY 'mypass';
USE mytestdb;
GRANT ALL PRIVILEGES ON mytestdb.* to myuser;
FLUSH PRIVILEGES;
```

## Login using the new user

```shell
mysql -u myuser -p
Enter password: (enter: 'mypass')
```




