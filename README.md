# Cafe Team Gallery - Interactive Carousel

[Demo](https://samisalmon.github.io/cafe-team-gallery/)

A beautiful, responsive image carousel showcasing cafe team members with smooth transitions and modern design. Built with vanilla JavaScript, HTML, and Tailwind CSS.

## ✨ Features

- **Interactive Navigation**: Next/Previous buttons with smooth transitions
- **Indicator Dots**: Direct navigation to any team member
- **Keyboard Support**: Arrow keys for navigation
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Performance Optimized**: Image preloading and hardware acceleration
- **Modern UI**: Gradient backgrounds and professional styling
- **Loading Animation**: Elegant preloader with spinning animation

## 🎨 Design Features

- **Portrait Cards**: Full rectangular cards optimized for standing photos
- **Emerald Theme**: Beautiful gradient backgrounds matching cafe aesthetics
- **Smooth Animations**: 300ms transitions with hardware acceleration
- **Professional Typography**: Clean, readable text with proper contrast
- **Hover Effects**: Interactive buttons with visual feedback

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/cafe-team-gallery.git
   cd cafe-team-gallery
   ```

2. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a local server
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## 📁 Project Structure

```
cafe-team-gallery/
├── index.html              # Main HTML file (entry point)
├── src/
│   ├── style.css           # Tailwind CSS styles
│   ├── script.js           # Carousel functionality
│   ├── input.css           # Tailwind input file
│   └── img/                # Team member images
│       ├── staff-1.jpg
│       ├── staff-2.jpg
│       ├── staff-3.jpg
│       ├── staff-4.jpg
│       ├── staff-5.jpg
│       └── staff-6.jpg
├── package.json            # Dependencies
├── package-lock.json       # Lock file
└── README.md              # This file
```

## 🎯 Team Members

The carousel features 6 cafe team members:

1. **Sarah Johnson** - Head Barista
2. **Lisa Chen** - Coffee Roaster
3. **Emma Rodriguez** - Pastry Chef
4. **David Thompson** - Cafe Manager
5. **Michael Park** - Barista
6. **James Wilson** - Kitchen Assistant

## 🎮 How to Use

### Navigation
- **Buttons**: Click the left/right arrow buttons
- **Indicators**: Click any dot below the carousel
- **Keyboard**: Use left/right arrow keys

### Customization
- **Add Team Members**: Add new images to `src/img/` and update the HTML
- **Change Colors**: Modify the emerald theme in the CSS classes
- **Adjust Timing**: Change transition duration in `src/script.js`

## 🛠️ Technical Details

### Performance Optimizations
- **Image Preloading**: Next/previous images loaded in background
- **Hardware Acceleration**: GPU-accelerated transforms using `translate3d()`
- **Optimized Loading**: `loading="eager"` and `decoding="async"` attributes
- **Smooth Transitions**: 300ms duration with `ease-out` timing

### Browser Support
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📱 Mobile Optimization

- **Touch-Friendly**: Large, accessible buttons
- **Responsive Images**: Optimized for portrait orientation
- **Fast Loading**: Reduced transition times for mobile
- **Smooth Scrolling**: Hardware-accelerated animations

## 🎨 Customization

### Changing Colors
```html
<!-- Update gradient classes -->
<div class="bg-gradient-to-b from-emerald-800/90 to-emerald-900/90">
```

### Adding More Team Members
1. Add image to `src/img/`
2. Copy carousel slide structure in HTML
3. Update JavaScript `totalImages` variable
4. Add new indicator dot

### Modifying Transitions
```javascript
// In src/script.js, update duration
carouselTrack.style.transition = 'transform 300ms ease-out';
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Font: [DynaPuff](https://fonts.google.com/specimen/DynaPuff)

---

**Made with ❤️ for showcasing amazing cafe teams** 
