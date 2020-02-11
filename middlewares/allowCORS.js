const allowCORS = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  // allow preflight
  if (req.method === 'OPTIONS') {
    res.status(200).send();
  } else {
    next();
  }
};

module.exports = {
  allowCORS,
};
