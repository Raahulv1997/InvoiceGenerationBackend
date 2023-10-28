import mysql from "mysql";


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "invoiceDb",
});


connection.connect((error) => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  
  export default connection;