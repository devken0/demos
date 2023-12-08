import express from "express"
import mysql from "mysql"

const app = express()
const db = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password",
  database: "database"
})

app.listen(8800, ()=>{
  console.log("backend initialized")
})

app.get("/")


