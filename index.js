

const Server=require('./src/Server')
require("dotenv").config();
const app = new Server().app;




 app.get('/',(req,res)=>{
     res.send('welcome to momeals')
 })

// app.post('/api',(req,res)=>{
//     res.send('success')
// })


app.listen(8080,()=>{
    console.log('server is running at 8080')
})