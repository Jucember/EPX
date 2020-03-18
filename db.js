//install lowdb (database)
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

    // tao gia tri default khi file rỗng
db.defaults({
  users:[],
   sessions:[],
   transfer:[]
 })
  .write();

module.exports=db;
