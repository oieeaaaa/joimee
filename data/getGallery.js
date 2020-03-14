// @preval
const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');


function getGallery() {
  const DIR = path.join(process.cwd(), './public/gallery');
  const files = fs.readdirSync(DIR);
  const images = files.map(name => {
    const alt = name.replace(/(?=\.).*/g, ''); // removing the file name extension
    const src = `/gallery/${name}`;
    const { width, height } = sizeOf(`./public/gallery/${name}`);

    return {
      alt,
      src,
      width,
      height,
    };
  });

  return images;
}

module.exports = getGallery;
