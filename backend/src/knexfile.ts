import "dotenv/config";

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST || "",
      user: process.env.DB_USERNAME || "",
      password: process.env.DB_PASSWORD || "",
      database: process.env.DB_NAME || "",
      port: process.env.DB_PORT || 8000,
    },
  },
};

export default config;
