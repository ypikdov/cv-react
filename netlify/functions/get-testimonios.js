// Archivo: netlify/functions/get-testimonios.js

const { Kysely, PostgresDialect } = require('kysely');
const { Pool } = require('pg');

const dialect = new PostgresDialect({
  pool: new Pool({
    // 🚨 ESTA LÍNEA ES LA IMPORTANTE 🚨
    // Asegúrate de que usa 'process.env.NETLIFY_DATABASE_URL'
    connectionString: process.env.NETLIFY_DATABASE_URL,
  })
});

const db = new Kysely({
  dialect,
});

exports.handler = async (event) => {
  try {
    // Asegúrate de que 'testimonios' es el nombre correcto de tu tabla
    const data = await db.selectFrom('testimonios').selectAll().execute();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    console.error('Error al consultar testimonios:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error interno del servidor', details: error.message }),
    };
  }
};