// const express = require("express");
// const app = express();
// var bodyParser = require("body-parser");
// var mysql = require("mysql");

// app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json())

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root", // my username
//   password: "manish", // my password
//   database: "myform",
// });
// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// app.set("view engine", "ejs");

// app.get("/index", (req, res) => {
//   res.render("index");
// });
// app.get("/login", (req, res) => {
//   res.render("login");
// });

// app.get("/profile", (req, res) => {
//   res.render("profile");
// });

// app.get("/delete", (req, res) => {
//   res.render("delete");
// });

// app.get("/change", (req, res) => {
//   res.render("change");
// });

// app.get("/update", (req, res) => {
//   res.render("update");
// });

// app.post("/index", (req, res) => {
//   var fname = req.body.fname;
//   var lname = req.body.lname;
//   var uname = req.body.uname;
//   var password = req.body.password;
//   console.log(fname);

//   var sql = `INSERT INTO users (firstname, lastname, username, password) VALUES ('${fname}', '${lname}', '${uname}', '${password}')`;
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
//   res.redirect("/login");
// });

// app.post("/login", (req, res) => {
//   var uname = req.body.uname;
//   var pass = req.body.password;
//   var sql = `select username,password from users where username = '${uname}' and password = '${pass}'`;

//   console.log(sql);
//   con.query(sql, function (err, result) {
//     if (result===null) throw new Error
//     console.log(err);
   
//     console.log(result);
//     var username = result[0].username;
//     var password = result[0].password;
//     console.log(username + password);

//     if (uname == username && pass == password) {
//       res.redirect("/profile");
//     } 
//     else if(uname !== username || pass == password){
     
//       res.redirect("/login");
      
//     }
//     else {
     
//       res.redirect("/login");
      
//     }
//   });
// });

// app.post("/delete", (req, res) => {
//   var uname = req.body.uname;

//   var sql = `delete from users where username= "${uname}" `;
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//     res.send("user deleted");
//   });
// });

// app.post("/change", (req, res) => {
//   var pass = req.body.oldpass;
//   var npass = req.body.newpass;

//   var sql = `update users set password="${npass}" where password="${pass}"`;
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     res.redirect("/update");
//   });
// });
// app.listen(3000);









// ///------------################################
// // sequelize

// const {Sequelize,DataTypes} = require("sequelize");
// const sequelize = new Sequelize(
//  'manish',
//  'root',
//  'manish',
//   {
//     host: 'localhost',
//     dialect: 'mysql'
//   }
// );


// sequelize.authenticate().then(() => {
//   console.log('Connection has been established successfully.');
// }).catch((error) => {
//   console.error('Unable to connect to the database: ', error);
// });


// const Book = sequelize.define("books", {
//   title: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   author: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   release_date: {
//     type: DataTypes.DATEONLY,
//   },
//   subject: {
//     type: DataTypes.INTEGER,
//   }
// });

// sequelize.sync().then(() => {
//   console.log('Book table created successfully!');
// }).catch((error) => {
//   console.error('Unable to create table : ', error);
// });



// // sequelize.sync().then(() => {
// //   console.log('Book table created successfully!');
// // }).catch((error) => {
// //   console.error('Unable to create table : ', error);
// // });

// Book.create({
//   title: "Clean Code",
//   author: "Robert Cecil Martin",
//   release_date: "2021-12-14",
//   subject: 3
// }).then(res => {
//   console.log(res)
// }).catch((error) => {
//   console.error('Failed to create a new record : ', error);
// });