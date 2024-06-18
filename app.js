const express = require("express");
const app = express();
const vendorRoutes =require('./routes/vendorRoutes')

app.use (express.json());
app.use('/api',vendorRoutes);

app.use((req,res)=> {
    res.status(404).jsom({error:"Endpoint Not found"});
});
 const PORT = 3036
 app.listen(PORT,()=>{
    console.log('server is running on port ${PORT}');
 });