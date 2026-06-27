"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function InteractiveCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check system preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 100;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Grid configuration
    const countX = 35;
    const countY = 35;
    const spacing = 7;
    const totalParticles = countX * countY;

    const positions = new Float32Array(totalParticles * 3);
    const initialPositions = new Float32Array(totalParticles * 3);
    const colors = new Float32Array(totalParticles * 3);

    const baseColor = new THREE.Color("#7575f0"); // Periwinkle Violet
    const altColor = new THREE.Color("#3cdd8c");  // Mint Green

    let idx = 0;
    for (let x = 0; x < countX; x++) {
      for (let y = 0; y < countY; y++) {
        const px = (x - countX / 2) * spacing;
        const py = (y - countY / 2) * spacing;
        const pz = 0;

        positions[idx * 3] = px;
        positions[idx * 3 + 1] = py;
        positions[idx * 3 + 2] = pz;

        initialPositions[idx * 3] = px;
        initialPositions[idx * 3 + 1] = py;
        initialPositions[idx * 3 + 2] = pz;

        // Blended color based on grid coordinates
        const ratio = (x + y) / (countX + countY);
        const mixedColor = baseColor.clone().lerp(altColor, ratio);
        colors[idx * 3] = mixedColor.r;
        colors[idx * 3 + 1] = mixedColor.g;
        colors[idx * 3 + 2] = mixedColor.b;

        idx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom circle texture
    const canvas = document.createElement("canvas");
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 2.2,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      depthWrite: false,
      blending: THREE.NormalBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse project variables
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const raycaster = new THREE.Raycaster();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const mouseIntersection = new THREE.Vector3();

    const onMouseMove = (e: MouseEvent) => {
      mouse.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.targetY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", onResize);

    // Animation variables
    let clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);

      const time = clock.getElapsedTime();

      // Smooth damping interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;

      // Project screen coordinates to 3D grid plane
      raycaster.setFromCamera(new THREE.Vector2(mouse.x, mouse.y), camera);
      raycaster.ray.intersectPlane(plane, mouseIntersection);

      const posArr = geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < totalParticles; i++) {
        const i3 = i * 3;
        const initX = initialPositions[i3];
        const initY = initialPositions[i3 + 1];

        // Waves
        let waveZ = 0;
        if (!prefersReduced) {
          waveZ =
            Math.sin(initX * 0.07 + time * 1.3) * 2.2 +
            Math.cos(initY * 0.07 + time * 1.0) * 2.2;
        }

        // Repel force
        const dx = mouseIntersection.x - initX;
        const dy = mouseIntersection.y - initY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let repelX = 0;
        let repelY = 0;
        let repelZ = 0;

        const repelRadius = 35;
        if (dist < repelRadius && !prefersReduced) {
          const force = (1.0 - dist / repelRadius) * 6.5;
          const angle = Math.atan2(dy, dx);
          repelX = -Math.cos(angle) * force;
          repelY = -Math.sin(angle) * force;
          repelZ = -force * 2.0;
        }

        // Apply smooth position update
        posArr[i3] += (initX + repelX - posArr[i3]) * 0.1;
        posArr[i3 + 1] += (initY + repelY - posArr[i3 + 1]) * 0.1;
        posArr[i3 + 2] += (waveZ + repelZ - posArr[i3 + 2]) * 0.1;
      }

      geometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none" />;
}
