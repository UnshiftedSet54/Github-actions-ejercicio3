const express = require('express')
const app = express()
const BooksRouter = require('./routes/books')
const AuthorsRouter = require('./routes/authors')
const port = process.env.PORT || 3001

app.use('/books', BooksRouter)

app.use('/authors', AuthorsRouter)

app.use('/*', (req, res) => {
  res.status(404).json({msg: 'Not Found'})
})

app.listen(port, () => console.log(`Listenin on port ${port}`))

module.exports = app