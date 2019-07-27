//TODO: create model and add product pages
Products = Array()

for (var i=0; i<11; i++) {
  product = {
    "id": i,
    "title": "Kayak " + i,
    "description": "an expensive kayak",
    "img": "images/kayak" + i + ".jpg",
    "status": "available",
    "price": 50,
    "owner": "5d3a787df38d26a1b050c9e5",
    "renter": null
  }
  Products.push(product)
}

/**
 * GET /
 * Rental product search page.
 */
exports.search = (req, res) => {
	console.log(JSON.stringify(Products))
  console.log(Products[0].title)
  res.render('search', {
    title: 'Search',
    products: Products
  });
};
