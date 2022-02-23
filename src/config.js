module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV: process.env.NODE_ENV || "development",
    DATABASE_URL:
      process.env.DATABASE_URL || "postgresql://postgres@localhost/noxx",
    API_TOKEN: process.env.API_TOKEN || 'a8s7d98f7a98s7d89f7a98sud',
    CLIENT: process.env.CLIENT || 'pg',
    HOST: process.env.HOST || '127.0.0.1',
    DATABASE: process.env.DATABASE || 'noxx',
    PASSWORD: process.env.PASSWORD || '',
    USER: process.env.PG_USER || 'admin'
  };
  