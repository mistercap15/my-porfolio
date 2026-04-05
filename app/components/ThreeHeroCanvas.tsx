"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    THREE?: unknown;
  }
}

export default function ThreeHeroCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);
  const [scriptFailed, setScriptFailed] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (!ready) setScriptFailed(true);
    }, 6000);
    return () => window.clearTimeout(timer);
  }, [ready]);

  useEffect(() => {
    if (!ready || !mountRef.current || !window.THREE) return;

    const THREE = window.THREE as {
      Scene: new () => {
        add: (...objects: unknown[]) => void;
      };
      PerspectiveCamera: new (
        fov: number,
        aspect: number,
        near: number,
        far: number
      ) => {
        position: { set: (x: number, y: number, z: number) => void };
        aspect: number;
        updateProjectionMatrix: () => void;
      };
      WebGLRenderer: new (config: { antialias: boolean; alpha: boolean }) => {
        domElement: HTMLCanvasElement;
        setPixelRatio: (ratio: number) => void;
        setSize: (width: number, height: number) => void;
        setClearColor: (color: number, alpha: number) => void;
        render: (scene: unknown, camera: unknown) => void;
        dispose: () => void;
      };
      AmbientLight: new (color: number, intensity: number) => unknown;
      PointLight: new (color: number, intensity: number, distance: number) => {
        position: { set: (x: number, y: number, z: number) => void };
      };
      Mesh: new (geometry: unknown, material: unknown) => {
        geometry: { dispose: () => void };
        material: unknown;
        rotation: { x: number; y: number; z: number };
      };
      TorusKnotGeometry: new (
        radius: number,
        tube: number,
        tubularSegments: number,
        radialSegments: number
      ) => unknown;
      MeshStandardMaterial: new (config: {
        color: number;
        metalness: number;
        roughness: number;
      }) => unknown;
      IcosahedronGeometry: new (radius: number, detail: number) => unknown;
      MeshBasicMaterial: new (config: {
        color: number;
        wireframe?: boolean;
        transparent?: boolean;
        opacity?: number;
      }) => unknown;
      TorusGeometry: new (
        radius: number,
        tube: number,
        radialSegments: number,
        tubularSegments: number
      ) => unknown;
      BufferGeometry: new () => {
        setAttribute: (key: string, value: unknown) => void;
        dispose: () => void;
      };
      BufferAttribute: new (
        array: Float32Array,
        itemSize: number
      ) => unknown;
      PointsMaterial: new (config: {
        color: number;
        size: number;
        transparent: boolean;
        opacity: number;
      }) => { dispose: () => void };
      Points: new (
        geometry: { dispose: () => void },
        material: { dispose: () => void }
      ) => { rotation: { y: number } };
    };
    const mount = mountRef.current;
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(60, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 0, 6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0x88ccff, 0.9);
    const pointA = new THREE.PointLight(0x00ffcc, 2.6, 40);
    pointA.position.set(4, 4, 4);
    const pointB = new THREE.PointLight(0x9b7bff, 2.3, 40);
    pointB.position.set(-4, -3, 4);
    scene.add(ambient, pointA, pointB);

    const core = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.1, 0.32, 180, 24),
      new THREE.MeshStandardMaterial({ color: 0x72f9ff, metalness: 0.75, roughness: 0.2 })
    );

    const shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(2.2, 1),
      new THREE.MeshBasicMaterial({ color: 0xa78bfa, wireframe: true, transparent: true, opacity: 0.38 })
    );

    const orbitRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.9, 0.03, 18, 240),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.72 })
    );
    orbitRing.rotation.x = Math.PI / 2.4;

    scene.add(core, shell, orbitRing);

    const particlesGeometry = new THREE.BufferGeometry();
    const particleCount = 700;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 16;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particlesMaterial = new THREE.PointsMaterial({ color: 0x67e8f9, size: 0.03, transparent: true, opacity: 0.8 });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    let frameId = 0;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      core.rotation.x += 0.009;
      core.rotation.y += 0.012;
      shell.rotation.y -= 0.0035;
      shell.rotation.x += 0.0018;
      orbitRing.rotation.z += 0.006;
      particles.rotation.y += 0.0008;

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      core.geometry.dispose();
      if (
        core.material &&
        typeof core.material === "object" &&
        "dispose" in core.material &&
        typeof core.material.dispose === "function"
      ) {
        core.material.dispose();
      }
      shell.geometry.dispose();
      if (
        shell.material &&
        typeof shell.material === "object" &&
        "dispose" in shell.material &&
        typeof shell.material.dispose === "function"
      ) {
        shell.material.dispose();
      }
      orbitRing.geometry.dispose();
      if (
        orbitRing.material &&
        typeof orbitRing.material === "object" &&
        "dispose" in orbitRing.material &&
        typeof orbitRing.material.dispose === "function"
      ) {
        orbitRing.material.dispose();
      }
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [ready]);

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.min.js"
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
        onError={() => setScriptFailed(true)}
      />
      <div className="three-hero-canvas" ref={mountRef} aria-label="3D developer model">
        {(!ready || scriptFailed) && (
          <div className="three-fallback">
            <div className="three-fallback-cube">
              <span className="front" />
              <span className="back" />
              <span className="right" />
              <span className="left" />
              <span className="top" />
              <span className="bottom" />
            </div>
            <p>{scriptFailed ? "3D model fallback active" : "Loading 3D model..."}</p>
          </div>
        )}
      </div>
    </>
  );
}
