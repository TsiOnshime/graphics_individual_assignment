import { initScene } from "./scripts/initScene.js";
import { createProduct } from "./scripts/createProduct.js";
import { addLighting } from "./scripts/addLighting.js";
import { setupInteractions } from "./scripts/interaction.js";
import { setupCameraAnimation } from "./scripts/cameraAnimation.js";
import * as THREE from "three";

let scene, camera, renderer, controls, productGroup;

({ scene, camera, renderer, controls } = initScene());

productGroup = createProduct(scene);
addLighting(scene);

// Add a ground plane for shadows
const groundGeo = new THREE.PlaneGeometry(20, 20);
const groundMat = new THREE.ShadowMaterial({ opacity: 0.25 });
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = 0;
ground.receiveShadow = true;
scene.add(ground);

setupInteractions(scene, camera, renderer, productGroup);
setupCameraAnimation(camera, productGroup, controls);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
