// Simple script to create placeholder images using HTML5 Canvas
const fs = require('fs');
const { createCanvas } = require('canvas');

const images = [
  { name: 'services-category.jpg', text: 'Design Services', color: '#E7816B' },
  { name: 'templates-category.jpg', text: 'Templates', color: '#D73527' },
  { name: 'courses-category.jpg', text: 'Courses', color: '#333' },
  { name: 'logo-package.jpg', text: 'Logo Package', color: '#E7816B' },
  { name: 'website-templates.jpg', text: 'Website Templates', color: '#D73527' },
  { name: 'uiux-course.jpg', text: 'UI/UX Course', color: '#333' },
  { name: 'brand-guidelines.jpg', text: 'Brand Guidelines', color: '#E7816B' },
  { name: 'website-design.jpg', text: 'Website Design', color: '#D73527' },
  { name: 'app-design.jpg', text: 'App Design', color: '#333' },
  { name: 'brand-identity.jpg', text: 'Brand Identity', color: '#E7816B' }
];

function createPlaceholder(filename, text, color) {
  const canvas = createCanvas(400, 300);
  const ctx = canvas.getContext('2d');
  
  // Background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, 400, 300);
  
  // Text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(text, 200, 150);
  
  // Save as JPEG
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`public/shop/${filename}`, buffer);
}

// Create all placeholder images
images.forEach(img => {
  createPlaceholder(img.name, img.text, img.color);
  console.log(`Created ${img.name}`);
});

console.log('All placeholder images created!');
