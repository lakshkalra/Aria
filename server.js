const express = require('express');
const PORT = 8081
const app = express();

app.use(express.json())


app.get('/', (req, res)=>{
    res.send('ok')
})

app.listen(PORT, ()=>console.log(`server up on ${PORT}`))