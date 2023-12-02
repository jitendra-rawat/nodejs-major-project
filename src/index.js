import express from "express";
import { connectDB } from "./db/db.js";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

connectDB()
.then( () => {

  app.listen(process.env.PORT, () => {
    console.log(`App is listening on port: ${process.env.PORT}`);
  });
  

} )
.catch( (error) => {
  console.log("MongoDB Connection failed", error);
})

app.on("error", (error) => {
  console.log("Error in Express:", error);
  throw error;
});

