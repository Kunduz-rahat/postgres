const express = require('express')

const PORT = process.env.PORT || 8080
const app = express()


app.get('/', (reg, res)=>{
res.send("Hello")
})
app.listen(PORT, ()=> console.log(`server started in PORT ${PORT}`))