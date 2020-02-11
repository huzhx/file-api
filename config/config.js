const yaml = require('js-yaml');
const fs = require('fs');
const env = process.env.NODE_ENV || 'dev';

if (env === 'dev' || env === 'test') {
  try {
    const config = yaml.safeLoad(fs.readFileSync('config/config.yml', 'utf8'));
    const envConfig = config[env];
    Object.keys(envConfig).forEach(key => {
      process.env[key] = envConfig[key];
    });
  } catch (err) {
    console.log(err);
  }
}
