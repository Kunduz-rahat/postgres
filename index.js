const express = require('express')
const router = require('./routes/user.routes')
const userRouter = require('./routes/user.routes')
const PORT = process.env.PORT || 8080
const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.listen(PORT, ()=> console.log(`server started in PORT ${PORT}`))