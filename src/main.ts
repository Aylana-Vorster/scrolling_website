import * as THREE from 'three'

import './style.css'
import { animate_torus, animate_moon, animate_star } from './Controls/animations';
import { addParticle } from './Controls/objects';
import { scene, camera, renderer, torus, pointLight, ambientLight, avatar, moon } from './constants';

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  avatar.rotation.y += 0.01;
  avatar.rotation.z += 0.01;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}

// Renderer functions
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.render(scene, camera);

// Set initial positions
camera.position.set(0, 2, 0);
pointLight.position.set(0, 0, 0);
avatar.position.set(0, 2, -5);
moon.position.set(-20, 10, 20);

// Camera movement
document.body.onscroll = moveCamera;
moveCamera();

// Adding to Scene
scene.add(torus, ambientLight, avatar, moon);
scene.fog = new THREE.FogExp2(0x000000, 0.02);

const particles = Array(200).fill(0).map(() => {
  const particle = addParticle();
  particle.userData.offset = Math.random() * 2 * Math.PI;
  return particle;
});
const clock = new THREE.Clock();

// Animations
animate_torus(torus, renderer, scene, camera);
animate_moon(moon, renderer, scene, camera);
animate_star(particles, renderer, scene, camera, clock);