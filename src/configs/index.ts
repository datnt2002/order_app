export const envConfig = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
  cors: {
    local: "http://localhost:3000",
    development: process.env.FE_DEVELOPMENT,
    production: process.env.FE_PRODUCTION,
    staging: process.env.FE_STAGING,
  },
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dbname: process.env.DB_NAME,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  },
};

const mongoConnection = {
  local: process.env.DATABASE_URL,
};

export default { ...envConfig, mongoConnection };
