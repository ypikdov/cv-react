// Blog.js
import React, { useEffect, useState } from 'react';
import './Blog.css';

const BLOG_URL = 'https://ypikdov.blogspot.com/';
const API_KEY = 'AIzaSyBzqTOlVai4ocpq-0mDvCR2w2GFdP6sXMQ'; // Recuerda mantener segura tu API Key

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [blogId, setBlogId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://www.googleapis.com/blogger/v3/blogs/byurl?url=${BLOG_URL}&key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setBlogId(data.id))
      .catch(err => {
        console.error('Error obteniendo Blog ID:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!blogId) return;
    // El parámetro fetchImages=true es crucial para obtener el array de imágenes en la respuesta
    fetch(`https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${API_KEY}&fetchImages=true`)
      .then(res => res.json())
      .then(data => {
        if (data.items) setPosts(data.items.slice(0, 3));
        setLoading(false);
      })
      .catch(err => {
        console.error('Error cargando posts:', err);
        setLoading(false);
      });
  }, [blogId]);

  // Función para crear un resumen de texto plano desde el HTML
  const createSnippet = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return (doc.body.textContent || "").substring(0, 120) + '...';
  };

  return (
    <section className="cv-blog-section" aria-labelledby="blog-heading">
      <h2 id="blog-heading">Últimas Entradas de Mi Blog</h2>
      <div className="cv-posts-list" role="list" aria-label="Lista de entradas del blog">
        {loading && <p role="status" aria-live="polite">Cargando posts...</p>}

        {!loading && posts.length === 0 && (
          <div className="cv-post-card no-posts" role="listitem">
            <h3>Sin publicaciones aún</h3>
            <p className="cv-post-resumen">
              Aún no hay entradas en el blog. ¡Vuelve pronto para ver contenido nuevo!
            </p>
          </div>
        )}

        {!loading && posts.map(post => {
          // Extrae la URL de la primera imagen o usa un placeholder
          const placeholderImage = 'https://placehold.co/600x400?text=Sin+Imagen';
          const thumbnailUrl = post.images && post.images.length > 0 ? post.images[0].url : placeholderImage;

          return (
            <article 
              className="cv-post-card" 
              key={post.id} 
              role="listitem"
              aria-labelledby={`post-title-${post.id}`}
            >
              <img 
                src={thumbnailUrl} 
                alt={`Miniatura para ${post.title}`} 
                className="cv-post-thumbnail" 
              />
              <div className="cv-post-content">
                <h3 id={`post-title-${post.id}`}>{post.title}</h3>
                <p className="cv-post-meta">
                  Publicado el {new Date(post.published).toLocaleDateString('es-ES')}
                </p>
                <p className="cv-post-resumen">
                  {createSnippet(post.content)}
                </p>
                <a 
                  href={post.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cv-post-link"
                  aria-label={`Leer más sobre ${post.title}`}
                  tabIndex={0}
                >
                  Leer Más
                </a>
              </div>
            </article>
          );
        })}
      </div>
      <div className="cv-blog-button-container">
        <a 
          href={BLOG_URL} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cv-post-link blog-completo"
          aria-label="Visitar el blog completo"
          tabIndex={0}
        >
          Ver Blog Completo
        </a>
      </div>
    </section>
  );
};

export default Blog;