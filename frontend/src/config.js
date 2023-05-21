const { NODE_ENV } = process.env;

let BACKEND_URL = 'https://api.boss.of.this.gym.nomoredomains.monster';
if (NODE_ENV === 'development') {
  BACKEND_URL = 'http://localhost:3000';
}

export default { BACKEND_URL };

