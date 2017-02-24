/**
 * GET /
 * Information page.
 */
exports.start = (req, res) => {
  res.render('information', {
    title: 'Information'
  });
};
