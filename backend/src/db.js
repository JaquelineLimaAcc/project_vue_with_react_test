import sql from 'mssql';

const config = {
  server: process.env.MS_HOST, 
  port: Number(process.env.MS_PORT),
  user: process.env.MS_USER,
  password: process.env.MS_PASSWORD,
  database: process.env.MS_DB,
  options: {
    encrypt: true,
    trustServerCertificate: true,     
  },
  pool: { max: 10, min: 1, idleTimeoutMillis: 30000 }
};

const pool = await sql.connect(config);

export default pool;