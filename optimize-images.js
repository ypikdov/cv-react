const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Carpeta de imágenes originales
const inputFolder = path.join(__dirname, 'public/images');
const outputFolder = path.join(__dirname, 'public/images-optimized');

// Crear carpeta de salida si no existe
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Lista de imágenes y tamaños deseados
const images = [
  { file: 'scport.jpeg', width: 330, height: 168 },
  { file: 'scsnake.jpeg', width: 388, height: 173 },
  { file: 'sctetris.png', width: 370, height: 173 },
  { file: 'banner.png', width: 1920, height: 600 },
  { file: 'favicon.png', width: 100, height: 94 }
];

// Procesar cada imagen
images.forEach(img => {
  const inputPath = path.join(inputFolder, img.file);
  const outputPath = path.join(outputFolder, img.file.replace(/\.(png|jpeg|jpg)$/, '.webp'));

  sharp(inputPath)
    .resize(img.width, img.height)
    .webp({ quality: 80 })
    .toFile(outputPath)
    .then(() => console.log(`Optimizada: ${img.file} → ${outputPath}`))
    .catch(err => console.error(`Error con ${img.file}:`, err));
});
