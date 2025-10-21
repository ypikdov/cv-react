// Archivo: netlify/functions/get-data.js

const { Kysely, PostgresDialect } = require('kysely');
const { Pool } = require('pg');

// 1. Creamos el "dialecto" de Postgres
const dialect = new PostgresDialect({
  pool: new Pool({
    // 2. Kysely usará la URL que Netlify DB inyecta automáticamente
    connectionString: process.env.NETLIFY_DB_URL,
    // Netlify suele manejar SSL automáticamente, pero si tienes problemas:
    // ssl: { rejectUnauthorized: false },
  })
});

// 3. Creamos la instancia de la base de datos
const db = new Kysely({
  dialect,
});

// 4. El handler (manejador) de la función
exports.handler = async (event) => {
  try {
    // La lógica de Kysely sigue siendo la misma
    // Asumiendo que tu tabla se llama 'posts'
    const data = await db.selectFrom('posts').selectAll().execute();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error('Error al consultar la base de datos:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error interno del servidor', details: error.message }),
    };
  }
};