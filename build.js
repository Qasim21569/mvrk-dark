// build.js - Custom build script for Vercel deployment
const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting build process...');

// Run vite build
try {
  console.log('📦 Building project with Vite...');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Vite build completed successfully!');
} catch (error) {
  console.error('❌ Vite build failed:', error);
  process.exit(1);
}

// Make sure the dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  console.error('❌ Dist directory not found!');
  process.exit(1);
}

// Create _redirects file if it doesn't exist
const redirectsPath = path.join(distDir, '_redirects');
if (!fs.existsSync(redirectsPath)) {
  console.log('📝 Creating _redirects file...');
  fs.writeFileSync(redirectsPath, '/* /index.html 200');
  console.log('✅ _redirects file created!');
}

console.log('🎉 Build process completed successfully!'); 