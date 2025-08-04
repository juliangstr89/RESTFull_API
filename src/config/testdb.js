import pool from './../config/dbbiblioteca.js';

const testConexion = async () => {
  try {
    const [rows] = await pool.query('SELECT NOW() AS ahora');
    console.log('✅ Conexión exitosa:', rows[0]);
  } catch (error) {
    console.error('❌ Error al conectar:', error);
  }
};

testConexion();
