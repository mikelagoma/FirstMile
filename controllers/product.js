//TODO: create model and add product pages
Products = Array()

/**
 * GET /
 * Rental product search page.
 */
exports.getSearch = (req, res) => {
  console.log(JSON.stringify(Products))
  console.log(Products[0].title)
  res.render('search', {
    title: 'Search',
    products: Products
  });
};

/**
 * POST /
 * Rental product search page.
 */
exports.postSearch = (req, res, next) => {
  console.log(JSON.stringify(Products))
  console.log(Products[0].title)
  res.render('search', {
    title: 'Search',
    products: Products
  });
};

/**
 * GET /
 * Rental product search page.
 */
exports.getProduct = (req, res) => {
  console.log
  product = Products[req.params.id];
  res.render('product', {
    title: 'Product',
    product: product
  });
};

/**
 * POST /
 * Rental product search page.
 */
exports.postProduct = (req, res, next) => {
  product = Products[req.id];
  res.render('product', {
    title: 'Product',
    product: product
  });
};


for (var i=0; i<6; i++) {
  product = {
    "id": i,
    "title": "Kayak " + i,
    "description": "an expensive kayak",
    "image": "images/products/" + i + ".jpg",
    "status": "available",
    "price": 50,
    "owner": "5d3a787df38d26a1b050c9e5",
    "renter": null
  }
  Products.push(product)
}

Products[0].title = "Predator PDL kayak"
Products[1].title = "Hurricane Santee 100LT Kayak"
Products[2].title = "Kayak 8 ft"
Products[3].title = "Old Town 14' Sit-In Kayak"
Products[4].title = "Native Slayer 10’ fishing kayak"
Products[5].title = "15\"4 Custom Gheenoe"

Products[0].description = "Renting a Predator PDL kayak, January 2019. Like new, great condition.\
Includes Coast Guard approved PFD, paddle, pole anchor, and wheels to strap on to kayak.\
Will deliver within 20 miles."
Products[1].description = "Kayak Very Lightweight \
Rent now! Almost new, used only 3 times\
Stored correctly so hull is correct\
10', weighs 33.5 lbs., & cockpit is 39\" x 18\"\
    Price includes : Kayak + Ocean Kayak Paddles + dolly"
Products[2].description = "Great for a day on the water, the Lifetime Lotus 8' Sit-on-Top Kayak features a contoured adult seat with a backrest and a molded-in child seat. The tunneled hull offer stability, while the footwells provide leverage as you paddle. This kayak is made of HDPE for durability and comes with a paddle.\
This has NEVER been in the water! RENT NOW! Will provide kayak, trailer, paddle and lifejacket (all included in price). Price is firm. "
Products[3].description = "A beautiful, mint condition, Old Town kayak. RENT NOW! Barely used - top of the line kayak. Comes with our paddles. Has provision for a rudder to be installed. Seat is in great condition. Garage kept and washed after every use. Untailored, easy to store in car. No cracks, no dents, bends, discoloration. "
Products[4].description = "This is a used kayak with a pedal system, perfect for covering water and trolling. Has a large storage up front, along with a small storage behind the seat for your phone, wallet, keys etc. Cup holder and rod holders. All items are in good or new condition for your convenience. We clean after every use. \
Included: \
2 piece paddle \
Life jacket and whistle\
Fish grips \
Mini cooler that fits perfectly in the rear hatch\
Milk crate to store your tackle. Fits with the cooler\
Anchor with rope\
New Lowrance Hook 4 fish finder with new battery \
This kayak comes ready to hit the water!"
Products[5].description = "Come rent out a wonderful experience!\
-Olive/Tan\
-9.8 Tohatsu 4 Stroke\
-Includes Trailer"

Products[0].price = 80
Products[1].price = 20
Products[2].price = 60
Products[3].price = 40
Products[4].price = 130
Products[5].price = 80