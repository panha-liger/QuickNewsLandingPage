# Product Videos

Place your product videos here:

## Product Mockup Videos
- `desktop-demo.mp4` - Desktop interface demo video
- `mobile-demo.mp4` - Mobile app demo video
- `hero-demo.mp4` - Main hero section demo

## Recommended Specifications:
- **Format:** MP4 (H.264 codec for best compatibility)
- **Resolution:** 
  - Desktop: 1920x1080px (Full HD) or higher
  - Mobile: 1080x1920px (9:16 aspect ratio)
- **Duration:** 10-30 seconds for hero, 30-60 seconds for demos
- **File Size:** Keep under 10MB for web performance
- **Frame Rate:** 30fps or 60fps

## Optimization Tips:
- Compress videos using tools like HandBrake or FFmpeg
- Use WebM format as fallback for better compression
- Consider creating multiple versions (high quality for desktop, compressed for mobile)

## Usage in Components:
```jsx
<video 
  src="/videos/products/desktop-demo.mp4" 
  autoPlay 
  muted 
  loop 
  playsInline
  className="w-full h-full object-cover"
/>
```
