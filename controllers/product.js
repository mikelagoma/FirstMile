/**
 * GET /
 * Rental product search page.
 */
exports.search = (req, res) => {
	console.log(JSON.stringify(req.user))
  res.render('search', {
    title: 'Home'
  });
};
