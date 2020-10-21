const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

//** import model */
const booksModel = require('../model/booksModel')
const categoriesModel = require('../model/categoriesModel')
const inventoriesModel = require('../model/inventoriesModel')
const publisherModel = require('../model/publisherModel')
const storesModel = require('../model/storesModel')

// ⚠️ propietary code, don't change it ⚠️
// this code will create db.json automatically if your folder doesn't have one
// courious? 👀 search for "IIFE function"
let db;
(async () => {
  try {
    const fs = require('fs')
    const util = require('util')
    const readdir = util.promisify(fs.readdir)
    const path = require('path').resolve()
    const dir = await readdir(path)
    if (!dir.includes('db.json'))
      fs.writeFile(path + 'db.json', '', () => 1)

    const adapter = new FileSync('db.json')
    db = low(adapter)
    db.defaults({
      books: [],
      categories: [],
      inventories: [],
      publisher: [],
      stores: []
    })
      .write()
  } catch (error) {
    console.log(error);
  }
})()

function shapeObject(tableName, input) {
  const model = {
    "books": booksModel,
    "categories": categoriesModel,
    "inventories": inventoriesModel,
    "publisher": publisherModel,
    "stores": storesModel,
  }
  const result = {}
  const modelCounter = model[tableName].length
  let counter = 0
  for (const namaKey in input) {
    if (model[tableName].includes(namaKey)) {
      result[namaKey] = input[namaKey]
      counter++
    }
  }
  if (counter < modelCounter) {
    return false
  }
  return result
}

/**
 * Get data
 * @param {String} tableName table name
 * @returns {Object} data
 */
function get(tableName, query) {
  if (query && Object.keys(query).length) {
    console.log(query);
    const data = db
      .get(tableName)
      .find(query)
      .value()
    return data
  }
  return db
    .get(tableName)
    .value()

}

/**
 * Add data
 * @param {String} tableName table name
 * @param {Object} body inserted data
 */
function add(tableName, body) {
  const bodyValidator = shapeObject(tableName, body)
  const isId = get(tableName, { id: body.id })
  if (isId != undefined) {
    return false
  }
  if (!bodyValidator) {
    return false
  }
  return db.get(tableName)
    .push(bodyValidator)
    .write()
}

/**
 * Add a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 * @param {Object} body updated data
 */
function edit(tableName, id, body) {
  const bodySchema = body
  bodySchema.id = id
  const isId = get(tableName, { id })
  const bodyValidator = shapeObject(tableName, bodySchema)
  if (isId == undefined) {
    return false
  }
  if (!bodyValidator) {
    return false
  }
  return db.get(tableName)
    .find({ id })
    .assign(bodyValidator)
    .write()
}

/**
 * Remove a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 */
function remove(tableName, id) {
  const isId = get(tableName, { id })
  if (isId == undefined) {
    return false
  }
  return db.get(tableName)
    .remove({ id })
    .write()
}

/**
 * Remove all data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 */
function removeAll(tableName) {
  db.get(tableName)
    .remove({})
    .write()
}

module.exports = {
  get,
  add,
  edit,
  remove,
  removeAll
}