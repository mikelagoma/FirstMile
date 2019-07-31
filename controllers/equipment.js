const Equipment = require('../models/Equipment');
const User = require('../models/User');
/**
 * GET /
 * Rental equipment search page.
 */
exports.getSearch = (req, res) => {
  // console.log(JSON.stringify(EquipmentPlaceholder))
  // console.log(EquipmentPlaceholder[0].title)
  // equipment = {}
  let searchResults;
  searchResults = {}
  searchResults.test = 'hi';
  searchResults.data = EquipmentPlaceholder;
  res.render('search', {
    title: 'Search',
    // equipment: equipment.equipment
    searchResults
  });
};

// /**
//  * POST /
//  * Rental equipment search page.
//  */
exports.postSearch = (req, res, next) => {
  // console.log(JSON.stringify(EquipmentPlaceholder))
  // console.log(EquipmentPlaceholder[0].title)
  // equipment = {}
  let searchResults;
  searchResults = {}
  searchResults.test = 'hi';
  searchResults.data = EquipmentPlaceholder;
  res.render('search', {
    title: 'Search',
    // equipment: equipment.equipment
    searchResults
  });
};

/**
 * GET /
 * Rental equipment search page.
 */
exports.getEquipment = (req, res) => {
  equipmentItem = {};
  equipmentItem.id = req.params.id
  equipmentItem.data = EquipmentPlaceholder[equipmentItem.id];;
  // const setRandomToken = token =>
  //   Equipment
  //     .findOne({ email: req.body.email })
  //     .then((user) => {
  //       if (!user) {
  //         req.flash('errors', { msg: 'Account with that email address does not exist.' });
  //       } else {
  //         user.passwordResetToken = token;
  //         user.passwordResetExpires = Date.now() + 3600000; // 1 hour
  //         user = user.save();
  //       }
  //       return user;
  //     });

  res.render('equipment', {
    title: 'Equipment',
    equipmentItem
  });
};

/**
 * POST /
 * Rental equipment search page.
 */
exports.postEquipment = (req, res, next) => {
  equipmentItem.data = EquipmentPlaceholder[req.id];
  res.render('equipment', {
    title: 'Equipment',
    equipmentItem
  });
};

//CREATE
/**
 * GET /
 * Rental equipment search page.
 Check if user is logged in
 Check if owner
 Pass user info
 */
exports.getCreateListing = (req, res) => {
  if (!req.user);
    return res.redirect('/login');
  res.render('listing/create', {
    title: 'Create Rental Listing',
  });
  // res.render('account/signup', {
  //   title: 'Create Account'
  // });
};

/**
 * POST /
 * Rental equipment search page.
 */
exports.postCreateListing = (req, res, next) => {
  const validationErrors = [];
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' });
  if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' });
  if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' });

  if (validationErrors.length) {
    req.flash('errors', validationErrors);
    return res.redirect('/signup');
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false });

  const equipment = new Equipment({
    email: req.body.email,
    password: req.body.password
  });

  User.findOne({ email: req.body.email }, (err, existingUser) => {
    if (err) { return next(err); }
    if (existingUser) {
      req.flash('errors', { msg: 'Account with that email address already exists.' });
      return res.redirect('/signup');
    }
    user.save((err) => {
      if (err) { return next(err); }
      req.logIn(user, (err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });

  res.render('listing/create', {
    title: 'Equipment',
    equipment: equipment
  });
};

//READ
//UPDATE
//DELETE
EquipmentPlaceholder = Array()
for (var i=0; i<6; i++) {
  equipment = {
    "id": i,
    "title": "Kayak " + i,
    "description": "an expensive kayak",
    "image": "/images/equipment/" + i + ".jpg",
    "status": "available",
    "price": 50,
    "owner": "5d3a787df38d26a1b050c9e5",
    "renter": null
  }
  EquipmentPlaceholder.push(equipment)
}

EquipmentPlaceholder[0].title = "Predator PDL kayak"
EquipmentPlaceholder[1].title = "Hurricane Santee 100LT Kayak"
EquipmentPlaceholder[2].title = "Kayak 8 ft"
EquipmentPlaceholder[3].title = "Old Town 14' Sit-In Kayak"
EquipmentPlaceholder[4].title = "Native Slayer 10’ fishing kayak"
EquipmentPlaceholder[5].title = "15\"4 Custom Gheenoe"

EquipmentPlaceholder[0].description = "Renting a Predator PDL kayak, January 2019. Like new, great condition.\
Includes Coast Guard approved PFD, paddle, pole anchor, and wheels to strap on to kayak.\
Will deliver within 20 miles."
EquipmentPlaceholder[1].description = "Kayak Very Lightweight \
Rent now! Almost new, used only 3 times\
Stored correctly so hull is correct\
10', weighs 33.5 lbs., & cockpit is 39\" x 18\"\
    Price includes : Kayak + Ocean Kayak Paddles + dolly"
EquipmentPlaceholder[2].description = "Great for a day on the water, the Lifetime Lotus 8' Sit-on-Top Kayak features a contoured adult seat with a backrest and a molded-in child seat. The tunneled hull offer stability, while the footwells provide leverage as you paddle. This kayak is made of HDPE for durability and comes with a paddle.\
This has NEVER been in the water! RENT NOW! Will provide kayak, trailer, paddle and lifejacket (all included in price). Price is firm. "
EquipmentPlaceholder[3].description = "A beautiful, mint condition, Old Town kayak. RENT NOW! Barely used - top of the line kayak. Comes with our paddles. Has provision for a rudder to be installed. Seat is in great condition. Garage kept and washed after every use. Untailored, easy to store in car. No cracks, no dents, bends, discoloration. "
EquipmentPlaceholder[4].description = "This is a used kayak with a pedal system, perfect for covering water and trolling. Has a large storage up front, along with a small storage behind the seat for your phone, wallet, keys etc. Cup holder and rod holders. All items are in good or new condition for your convenience. We clean after every use. \
Included: \
2 piece paddle \
Life jacket and whistle\
Fish grips \
Mini cooler that fits perfectly in the rear hatch\
Milk crate to store your tackle. Fits with the cooler\
Anchor with rope\
New Lowrance Hook 4 fish finder with new battery \
This kayak comes ready to hit the water!"
EquipmentPlaceholder[5].description = "Come rent out a wonderful experience!\
-Olive/Tan\
-9.8 Tohatsu 4 Stroke\
-Includes Trailer"

EquipmentPlaceholder[0].price = 40
EquipmentPlaceholder[1].price = 10
EquipmentPlaceholder[2].price = 30
EquipmentPlaceholder[3].price = 20
EquipmentPlaceholder[4].price = 65
EquipmentPlaceholder[5].price = 40