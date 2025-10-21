// Archivo: netlify/functions/add-testimonio.js
const { Kysely, PostgresDialect } = require('kysely');
const { Pool } = require('pg');

const dialect = new PostgresDialect({
  pool: new Pool({
    // 🚨 ESTA LÍNEA ES LA IMPORTANTE 🚨
    connectionString: process.env.NETLIFY_DATABASE_URL 
  })
});
const db = new Kysely({ dialect });

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { autor, texto } = JSON.parse(event.body);

    if (!autor || !texto) {
      return { statusCode: 400, body: 'Autor y texto son requeridos' };
    }
    
    // Asegúrate de que 'testimonios' y las columnas 'autor'/'texto' son correctas
    const nuevoTestimonio = await db.insertInto('testimonios')
      .values({
        autor: autor,
        texto: texto,
      })
      .returningAll() 
      .executeTakeFirst();

    return {
      statusCode: 201, 
      body: JSON.stringify(nuevoTestimonio),
    };

  } catch (error) {
    console.error('Error al insertar testimonio:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Error al guardar' }) };
  }
};
