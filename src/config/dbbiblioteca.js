
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  port: 3306, // puerto por defecto de MySQL
  user: 'root', // reemplazá si usás otro usuario
  password: 'admin', // poné tu contraseña si la tenés
  database: 'biblioteca',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
