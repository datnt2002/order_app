interface IConfig {
  env: string;
  port: string;
  redis: {
    url: string;
  };
  cors: {
    local: string;
    development: string;
    production: string;
    staging: string;
  };
  db: {
    username: string;
    password: string;
    dbname: string;
    local: string;
  };
  jwt: {
    secret: string;
    expiresIn: number;
    refreshExpiresIn: number;
  };
}

// const parseEnv = (initialValues: Record<string, unknown>) => {
//   const parsedValues: IConfig;
//   Object.keys(initialValues).forEach((key) => {
//     const value = initialValues[key];
//   });
//   return parsedValues;
// };

export default (): IConfig => ({
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  redis: {
    url: process.env.REDIS_URL,
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
    local: process.env.DATABASE_URL,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
    refreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  },
});
