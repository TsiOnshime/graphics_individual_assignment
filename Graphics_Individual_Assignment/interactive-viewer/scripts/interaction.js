import * as THREE from "three";
import { gsap } from "gsap";

/**
 * Sets up mouse interactions for the 3D product viewer.
 * Handles hover scaling, pointer cursor, and info panel display.
 */
export function setupInteractions(scene, camera, renderer, productGroup) {
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  const infoPanel = document.getElementById("infoPanel");

  let hoveredObject = null;
  let infoPanelTimeout = null;

  function onMouseMove(event) {
    // Normalize mouse coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(productGroup.children);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      if (hoveredObject !== object) {
        // Reset previous hovered object
        if (hoveredObject) {
          gsap.to(hoveredObject.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
          // Remove glow
          hoveredObject.material.emissive.set(0x000000);
        }
        hoveredObject = object;
        // Scale up hovered object
        gsap.to(hoveredObject.scale, { x: 1.1, y: 1.1, z: 1.1, duration: 0.3 });
        // Add glow
        hoveredObject.material.emissive.set(0x00fff7);
      }
      document.body.classList.add("pointer");
    } else {
      if (hoveredObject) {
        gsap.to(hoveredObject.scale, { x: 1, y: 1, z: 1, duration: 0.3 });
        // Remove glow
        hoveredObject.material.emissive.set(0x000000);
        hoveredObject = null;
      }
      document.body.classList.remove("pointer");
    }
  }

  function onClick(event) {
    // Normalize mouse coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(productGroup.children);

    if (intersects.length > 0) {
      const obj = intersects[0].object;
      const originalColor = obj.material.color.getHex();

      // Animate color change (flash red)
      gsap.to(obj.material.color, {
        r: 1,
        g: 0,
        b: 0,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          obj.material.color.setHex(originalColor);
        },
      });

      // Show info panel with object name
      infoPanel.textContent = obj.name;
      infoPanel.classList.add("visible");
      infoPanel.hidden = false;

      // Clear previous timeout if exists
      if (infoPanelTimeout) clearTimeout(infoPanelTimeout);
      infoPanelTimeout = setTimeout(() => {
        infoPanel.classList.remove("visible");
        infoPanel.hidden = true;
      }, 1500);
    }
  }

  window.addEventListener("mousemove", onMouseMove);
  window.addEventListener("click", onClick);
}
