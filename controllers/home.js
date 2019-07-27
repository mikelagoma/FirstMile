/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('home_backup', {
    title: 'Home'
  });
};
