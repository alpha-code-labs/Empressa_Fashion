const { app } = require(".");
const { connectDb } = require("./config/db");
require('dotenv').config();


const PORT=process.env.PORT;
app.listen(PORT,async ()=>{
    await connectDb()
    console.log("ecommerce api listing on port ",PORT)
})
