import * as THREE from 'three';
import { star_geometry, star_material, dice_geometry, dice_material, scene } from '../constants';

export function addParticle() {
    // Assuming dice_geometry and dice_material are defined
    const geometries = [star_geometry, dice_geometry];
    const materials = [star_material, dice_material];

    // Select a random geometry and material
    const randomGeometry = geometries[Math.floor(Math.random() * geometries.length)];
    const randomMaterial = materials[Math.floor(Math.random() * materials.length)];

    //randomMaterial.fog = true;

    const particle = new THREE.Mesh(randomGeometry, randomMaterial);
    particle.castShadow = true;
    particle.receiveShadow = true;

    const [x, y, z] = Array(3)
        .fill(0)
        .map(() => THREE.MathUtils.randFloatSpread(100));

    particle.position.set(x, y, z);
    scene.add(particle);

    return particle;
}

