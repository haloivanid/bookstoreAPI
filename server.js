const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')

const addBooks = require('./routes/books/add')
const editBooks = require('./routes/books/edit')
const removeBooks = require('./routes/books/remove')
const getBooks = require('./routes/books/get')

const addCategories = require('./routes/categories/add')
const editCategories = require('./routes/categories/edit')
const removeCategories = require('./routes/categories/remove')
const getCategories = require('./routes/categories/get')

const addInventories = require('./routes/inventories/add')
const editInventories = require('./routes/inventories/edit')
const removeInventories = require('./routes/inventories/remove')
const getInventories = require('./routes/inventories/get')

const addPublisher = require('./routes/publisher/add')
const editPublisher = require('./routes/publisher/edit')
const removePublisher = require('./routes/publisher/remove')
const getPublisher = require('./routes/publisher/get')

const addStores = require('./routes/stores/add')
const editStores = require('./routes/stores/edit')
const removeStores = require('./routes/stores/remove')
const getStores = require('./routes/stores/get')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)

//** reserved for route */
app.use(addBooks)
app.use(editBooks)
app.use(removeBooks)
app.use(getBooks)

app.use(addCategories)
app.use(editCategories)
app.use(removeCategories)
app.use(getCategories)

app.use(addInventories)
app.use(editInventories)
app.use(removeInventories)
app.use(getInventories)

app.use(addPublisher)
app.use(editPublisher)
app.use(removePublisher)
app.use(getPublisher)

app.use(addStores)
app.use(editStores)
app.use(removeStores)
app.use(getStores)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
