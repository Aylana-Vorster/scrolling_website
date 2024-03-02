import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

// Set Up
export const scene = new THREE.Scene();

export const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

export const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#background') as HTMLCanvasElement
});
//Photo by <a href="https://unsplash.com/@lukechesser?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Luke Chesser</a> on <a href="https://unsplash.com/photos/light-blue-to-dark-blue-gradient-3rWagdKBF7U?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

// Torus
const torus_geometry = new THREE.TorusGeometry(10, 3, 16, 100);

const torus_texture = textureLoader.load('../src/Assets/Rainbow_Gradient.png');

const torus_material = new THREE.MeshStandardMaterial({ wireframe: true, map: torus_texture });

export const torus = new THREE.Mesh(torus_geometry, torus_material);

// Light
export const pointLight = new THREE.PointLight(0x808080);

export const ambientLight = new THREE.AmbientLight(0xffffff);

//Avatar
const avatarTexture = textureLoader.load('../src/Assets/Dark_Gradient.jpg');

export const avatar = new THREE.Mesh(
    new THREE.BoxGeometry(3, 3, 3),
    new THREE.MeshBasicMaterial({ map: avatarTexture })
);

// Moon
const moonTexture = textureLoader.load('../src/Assets/Moon.jpg');

const normalTexture = textureLoader.load('../src/Assets/normal.jpg');

export const moon = new THREE.Mesh(
    new THREE.SphereGeometry(7, 32, 32),
    new THREE.MeshBasicMaterial({
        map: moonTexture,
        normalMap: normalTexture
    })
);

// Particles

// <a href="https://www.vecteezy.com/free-vector/orange-gradient-background">Orange Gradient Background Vectors by Vecteezy</a>
const particle_texture = textureLoader.load('../src/Assets/Rainbow_Gradient.png');

export const dice_geometry = new THREE.IcosahedronGeometry(0.3, 0);

export const dice_material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: particle_texture });

export const star_geometry = new THREE.SphereGeometry(0.3, 24, 24);

export const star_material = new THREE.MeshBasicMaterial({ color: 0xffffff, map: particle_texture });

// Background

textureLoader.load('../src/Assets/Space3.jpg', function (texture) {
    scene.background = texture;
});