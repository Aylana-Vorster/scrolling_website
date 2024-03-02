export function animate_torus(torus, renderer, scene, camera) {
    requestAnimationFrame(() => animate_torus(torus, renderer, scene, camera));

    torus.rotation.x += 0.01;
    torus.rotation.y += 0.005;
    torus.rotation.z += 0.01;

    renderer.render(scene, camera);
}

export function animate_moon(moon, renderer, scene, camera) {
    requestAnimationFrame(() => animate_moon(moon, renderer, scene, camera));

    moon.rotation.y += 0.005;

    renderer.render(scene, camera);
}

export function animate_star(stars, renderer, scene, camera, clock) {
    requestAnimationFrame(() => animate_star(stars, renderer, scene, camera, clock));

    stars.forEach(star => {
        const offset = star.userData.offset || 0;  // Get the offset, or default to 0
        const scale = Math.sin(clock.getElapsedTime() + offset) * 0.5 + 1.5;
        star.scale.set(scale, scale, scale);

        star.rotation.x += 0.01;
        star.rotation.y += 0.01;
    });

    renderer.render(scene, camera);
}

export function move_camera(moon, avatar, camera, t) {
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;

    avatar.rotation.y += 0.01;
    avatar.rotation.z += 0.01;

    camera.position.z = t * -0.0001;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
}