const Pool = require('pg').Pool

const pool = new Pool({
	user:'postgres',
	password:'kuzya',
	host:'localhost',
	port:5432,
	database:'user'
})

module.exports=pool