import sharp from 'sharp';
import { existsSync } from 'fs';

const portrait = 'public/images/ahmed-mighri.png';
if (!existsSync(portrait)) throw new Error('portrait missing');

const overlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#050816" stop-opacity="0.15"/>
      <stop offset="55%" stop-color="#050816" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#050816" stop-opacity="0.88"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <text x="64" y="510" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="700" fill="#ffffff">Ahmed Mighri</text>
  <text x="64" y="565" font-family="Arial, Helvetica, sans-serif" font-size="28" fill="#4da3ff">Software Engineer &amp; Full-Stack Developer</text>
</svg>
`);

await sharp(portrait)
  .resize(1200, 630, { fit: 'cover', position: 'top' })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .png()
  .toFile('public/og-default.png');

await sharp(portrait)
  .resize(180, 180, { fit: 'cover', position: 'top' })
  .png()
  .toFile('public/apple-touch-icon.png');

await sharp(portrait)
  .resize(32, 32, { fit: 'cover', position: 'top' })
  .png()
  .toFile('public/favicon-32.png');

console.log('SEO images generated');
