var Product = require('../models/product.model');

module.exports.product = async function(req, res){
  // var page =parseInt(req.query.page) || 1;
  // var perPage =8;
  // var start = (page-1)*perPage;
  // var end = page*perPage;
    // res.render('product/sp',{
    //   products: db.get('products').value().slice(start, end)
    // });

  	var products = await Product.find();
	res.render('product/sp', {
		products: products
	});

};
