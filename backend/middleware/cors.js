const ALLOWED_URLS = [
  'https://localhost:3000',
  'https://boss.of.this.gym.nomoredomains.monster',
  'https://api.boss.of.this.gym.nomoredomains.monster',
];
const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";


const cors = (req, res, next) => {
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  res.header('Access-Control-Allow-Origin', "*");
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);
    return res.end();
  }
  next();
}

module.exports = cors;
