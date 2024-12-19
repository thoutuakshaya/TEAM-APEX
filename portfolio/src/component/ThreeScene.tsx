'use client';

import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useEffect, useRef } from 'react';

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null); // Reference to the 3D model

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // === Scene, Camera, and Renderer ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // Transparent canvas
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    // === Lighting Setup ===
    const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Bright ambient light
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 2); // Stronger light to brighten the model
    directionalLight.position.set(10, 10, 10); // Position the light to cast down on the model
    scene.add(directionalLight);

    // === GLTFLoader: Load 3D Model ===
    const loader = new GLTFLoader();
    loader.load(
      '/models/girl.glb', // Ensure your path is correct
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model; // Store the model reference

        // Move and scale the model
        model.position.set(-1, -2.5, 0);  
        model.scale.set(2.5, 2.5, 2.5); 
        scene.add(model);

        // === Adjust Eye Look ===
        const leftEye = model.getObjectByName('LeftEye'); // Replace with actual node name
        const rightEye = model.getObjectByName('RightEye'); // Replace with actual node name

        if (leftEye) {
          leftEye.rotation.x += -0.1; // Adjust this value for a slight downward look
        }
        if (rightEye) {
          rightEye.rotation.x += -0.1; // Adjust this value for a slight downward look
        }
      },
      undefined,
      (error) => {
        console.error('Error loading the model:', error);
      }
    );

    // === Camera Setup ===
    camera.position.set(0, 1, 4); // Set camera position
    camera.lookAt(0, 0, 0); // Make the camera look at the model

    // === Render the Scene ===
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };

    animate();

    // === Clean up when component unmounts ===
    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="three-scene" />;
};

export default ThreeScene;
