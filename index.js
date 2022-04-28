const express = require('express')
const app = express()
const mongoose = require('mongoose')

app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

mongoose.connect('mongodb+srv://alydw:outubro2010@apicluster.juozy.mongodb.net/bancodaapi?retryWrites=true&w=majority')
.then(() => {
    console.log("Conectamos ao MongoDB")
    app.listen(3000)
})
.catch((err) => console.log(err))

app.get('/', (req, res) => {
    res.json({message: 'Oi Express'})
})