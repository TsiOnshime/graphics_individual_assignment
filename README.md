# 🪑 3D Product Viewer

A modern, interactive 3D product viewer built with [Three.js](https://threejs.org/) and [GSAP](https://greensock.com/gsap/).  
Enjoy smooth camera animation, interactive highlighting, glowing effects, and a stylish, responsive UI.

---

## ✨ Features

- **Animated 3D Product:** View a stylized chair with realistic materials and soft shadows.
- **Interactive Hover & Click:** Hover to highlight parts with a neon glow and scale effect. Click to reveal info and a color flash.
- **Animated Info Panel:** Displays the name of the part you interact with.
- **Modern UI:** Glassmorphism info panel, animated gradient background, and custom pointer.
- **Responsive:** Looks great on all screen sizes.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone this repository**
   ```sh
   git clone <your-repo-url>
   cd Graphics_Individual_Assignment/interactive-viewer
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Run the development server**
   ```sh
   npm run dev
   ```

4. **Open in your browser**  
   Visit [http://localhost:5173](http://localhost:5173) (or the URL shown in your terminal).

---

## 🗂️ Project Structure

```
interactive-viewer/
├── index.html            # Main HTML file
├── main.js               # Entry point, scene setup
├── style.css             # Modern, animated styles
├── scripts/
│   ├── addLighting.js        # Lighting setup
│   ├── cameraAnimation.js    # Camera orbit and float animation
│   ├── createProduct.js      # 3D product (chair) creation
│   ├── initScene.js          # Scene, camera, renderer, controls
│   └── interaction.js        # Hover/click interactions
```

---

## 🎨 Customization

- **Change Product Colors:**  
  Edit color values in [`scripts/createProduct.js`](scripts/createProduct.js).

- **Adjust Lighting:**  
  Tweak light colors and intensity in [`scripts/addLighting.js`](scripts/addLighting.js).

- **UI & Effects:**  
  Modify styles in [`style.css`](style.css) for a different look.

---

## 🙏 Credits

- [Three.js](https://threejs.org/)
- [GSAP](https://greensock.com/gsap/)
- Neon color palette inspired by [coolors.co](https://coolors.co/)

---

## 📄 License

This project is for educational purposes only.  
three.org
