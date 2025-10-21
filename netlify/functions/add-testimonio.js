// Archivo: netlify/functions/add-testimonio.js
const { Kysely, PostgresDialect } = require('kysely');
const { Pool } = require('pg');

const dialect = new PostgresDialect({
  pool: new Pool({ connectionString: process.env.NETLIFY_DB_URL })
});
const db = new Kysely({ dialect });

exports.handler = async (event) => {
  // Solo permitimos peticiones POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // 1. Obtenemos los datos que React nos envió en el 'body'
    const { autor, texto } = JSON.parse(event.body);

    if (!autor || !texto) {
      return { statusCode: 400, body: 'Autor y texto son requeridos' };
    }

    // 2. Insertamos en la base de datos
    // TODO: Cambia 'testimonios' por tu tabla
    // TODO: Cambia 'autor' y 'texto' por tus nombres de columna
    const nuevoTestimonio = await db.insertInto('testimonios')
      .values({
        autor: autor,
        texto: texto,
        // created_at: new Date() // (Opcional, si tienes esa columna)
      })
      .returningAll() // Devuelve el objeto insertado
      .executeTakeFirst();

    // 3. Devolvemos el testimonio recién creado
    return {
      statusCode: 201, // 201 = Creado
      body: JSON.stringify(nuevoTestimonio),
    };

  } catch (error) {
    console.error('Error al insertar testimonio:', error);
    return { statusCode: 500, body: JSON.stringify({ error: 'Error al guardar' }) };
  }
};
