const express = require('express')
const bodyParser = require('body-parser')

const rootRoute = require('./routes/rootRoute')
const registerRoute = require('./routes/registerRoute')
const loginRoute = require('./routes/loginRoute')

const addBooksRoute = require('./routes/books/add')
const editBooksRoute = require('./routes/books/edit')
const removeBooksRoute = require('./routes/books/remove')
const getBooksRoute = require('./routes/books/get')

const addCategoriesRoute = require('./routes/categories/add')
const editCategoriesRoute = require('./routes/categories/edit')
const removeCategoriesRoute = require('./routes/categories/remove')
const getCategoriesRoute = require('./routes/categories/get')

const addInventoriesRoute = require('./routes/inventories/add')
const editInventoriesRoute = require('./routes/inventories/edit')
const removeInventoriesRoute = require('./routes/inventories/remove')
const getInventoriesRoute = require('./routes/inventories/get')

const addPublisherRoute = require('./routes/publisher/add')
const editPublisherRoute = require('./routes/publisher/edit')
const removePublisherRoute = require('./routes/publisher/remove')
const getPublisherRoute = require('./routes/publisher/get')

const addStoresRoute = require('./routes/stores/add')
const editStoresRoute = require('./routes/stores/edit')
const removeStoresRoute = require('./routes/stores/remove')
const getStoresRoute = require('./routes/stores/get')

const app = express()
app.use(bodyParser.json())

app.use(rootRoute)
app.use(registerRoute)
app.use(loginRoute)

//** reserved for route */
app.use(addBooksRoute)
app.use(editBooksRoute)
app.use(removeBooksRoute)
app.use(getBooksRoute)

app.use(addCategoriesRoute)
app.use(editCategoriesRoute)
app.use(removeCategoriesRoute)
app.use(getCategoriesRoute)

app.use(addInventoriesRoute)
app.use(editInventoriesRoute)
app.use(removeInventoriesRoute)
app.use(getInventoriesRoute)

app.use(addPublisherRoute)
app.use(editPublisherRoute)
app.use(removePublisherRoute)
app.use(getPublisherRoute)

app.use(addStoresRoute)
app.use(editStoresRoute)
app.use(removeStoresRoute)
app.use(getStoresRoute)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})
