// require related modules used in the project
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const port = 3000

// set template engine in express
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// use body-parser
app.use(express.urlencoded({ extended: true }))

// localhost: 3000
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  console.log(req.body)
  res.render('index')
})

// start and listen on express server
app.listen(port, () => {
  console.log(`The Express Server is running on http://localhost: ${port}`)
})
