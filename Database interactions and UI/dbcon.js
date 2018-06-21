var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit : 10,
  host            : 'classmysql.engr.oregonstate.edu',
  user            : 'cs290_bians',
  password        : '7534',
  database        : 'cs290_bians'
});

module.exports.pool = pool;