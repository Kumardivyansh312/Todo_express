const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'hbs')    // calling inbuild methods of template language
let task = ['sample task']

app.get('/', (req, res) => {
    res.render('home.hbs',{title:'Anshul',task})
})

app.post('/', (req, res) => {
    task.push(req.body.newtask)
    res.redirect('/')
})

app.listen(4444, () => {
    console.log('server has been started for To DO List using express')
})
