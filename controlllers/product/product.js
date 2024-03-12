
const Pool = require('pg').Pool
config = require("../../config/config");
db = config.database;
const pool = new Pool(db);
const queryList = require("./productQ");


//===================Get All Products============================

const getAllproducts = (request, response) => {

	pool.connect((err, client, done) => {
		if (err) {
			console.log(err);
			done();
			return response.status(200).json({ code: "SA100", status: "failed", message: "Internal Server Error" });
		}
		else {
			client.query(queryList.getproduct_qr,(error, results) => {
				if (error) {
				console.log(error)
					done();
					return response.status(200).json({ status: 'Failure', code: 'SA015', message: 'product retrieval failed' });
				}
				else {
					console.log(results);
					done();
					return response.status(200).json({ status: 'Success', code: 'SA000', result: results.rows, message: 'product retrieval successful' });
				}
			})
		}}
		)
	}
			
	



module.exports= {
	getAllproducts
}

