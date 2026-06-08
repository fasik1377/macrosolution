"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type SceneTone = "home" | "contact" | "testimonials" | "services" | "blog";

const toneColors: Record<SceneTone, number[]> = {
  home: [0xf97316, 0xfb923c, 0x111827, 0xffffff, 0x431407, 0xf59e0b],
  contact: [0xf97316, 0x0f172a, 0xfb923c, 0xffffff, 0x7c2d12, 0xf59e0b],
  testimonials: [0xf97316, 0xffedd5, 0x111827, 0xffffff, 0x9a3412, 0xf59e0b],
  services: [0xf97316, 0x0f172a, 0xfb923c, 0xffffff, 0x7c2d12, 0xfacc15],
  blog: [0xf97316, 0xfb923c, 0x111827, 0xffffff, 0x9a3412, 0xf59e0b],
};

function makeLabel(text: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = 256;
  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(255,255,255,0.92)";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#111827";
  context.font = "700 54px Arial";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(text, canvas.width / 2, canvas.height / 2);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function ThreeSolutionScene({ tone = "home" }: { tone?: SceneTone }) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 1.15, 8);
    const pointer = new THREE.Vector2(0, 0);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    const rimLight = new THREE.PointLight(0xf97316, 3.5, 18);
    keyLight.position.set(4, 5, 6);
    rimLight.position.set(-3.5, 1.5, 3.5);
    scene.add(ambientLight, keyLight, rimLight);

    const group = new THREE.Group();
    scene.add(group);

    const coreGroup = new THREE.Group();
    group.add(coreGroup);

    const colors = toneColors[tone];
    const labels = tone === "contact"
      ? ["CALL", "MAIL", "VISIT", "CRM", "SUPPORT", "START"]
      : tone === "testimonials"
        ? ["TRUST", "ERP", "POS", "HR", "DMS", "RPA"]
        : tone === "services"
          ? ["ERP", "MOBILE", "WEB", "CUSTOM", "CLOUD", "SECURE"]
          : tone === "blog"
            ? ["IDEAS", "GUIDES", "ERP", "POS", "TECH", "GROWTH"]
            : ["ERP", "POS", "SECURE", "RPA", "CLOUD", "DMS"];

    const positions = [
      [-1.65, 1.05, 0.2],
      [1.35, 0.9, -0.18],
      [-1.1, -0.95, 0.35],
      [1.55, -0.78, 0.08],
      [0, 0.05, -0.92],
      [0.1, 1.9, -1.12],
    ] as const;

    const cards = colors.map((color, index) => {
      const cardGroup = new THREE.Group();
      const geometry = new THREE.BoxGeometry(2.25, 1.3, 0.14);
      const material = new THREE.MeshPhysicalMaterial({
        color,
        roughness: 0.32,
        metalness: color === 0xffffff ? 0.04 : 0.2,
        transmission: color === 0xffffff ? 0.12 : 0,
        transparent: true,
        opacity: color === 0xffffff ? 0.9 : 1,
      });
      const mesh = new THREE.Mesh(geometry, material);

      const edge = new THREE.LineSegments(
        new THREE.EdgesGeometry(geometry),
        new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })
      );

      const labelTexture = makeLabel(labels[index]);
      const label = new THREE.Mesh(
        new THREE.PlaneGeometry(1.15, 0.36),
        new THREE.MeshBasicMaterial({ map: labelTexture, transparent: true })
      );
      label.position.z = 0.078;

      const bars = [0, 1, 2].map((barIndex) => {
        const bar = new THREE.Mesh(
          new THREE.BoxGeometry(0.3 + barIndex * 0.2, 0.045, 0.025),
          new THREE.MeshBasicMaterial({ color: color === 0xffffff ? 0xf97316 : 0xffffff, transparent: true, opacity: 0.7 })
        );
        bar.position.set(-0.65 + barIndex * 0.12, -0.42 + barIndex * 0.13, 0.09);
        return bar;
      });

      cardGroup.add(mesh, edge, label, ...bars);
      const [x, y, z] = positions[index];
      cardGroup.position.set(x, y, z);
      cardGroup.rotation.set(-0.1 + index * 0.028, -0.25 + index * 0.085, -0.12 + index * 0.046);
      group.add(cardGroup);
      return { cardGroup, geometry, material, edge, labelTexture };
    });

    const coreGeometry = new THREE.IcosahedronGeometry(0.78, 2);
    const coreMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.18,
      metalness: 0.08,
      transparent: true,
      opacity: 0.78,
      transmission: 0.2,
      clearcoat: 0.65,
      clearcoatRoughness: 0.2,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(core);

    const coreWire = new THREE.LineSegments(
      new THREE.EdgesGeometry(coreGeometry),
      new THREE.LineBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.56 })
    );
    coreGroup.add(coreWire);

    const haloGeometry = new THREE.TorusGeometry(1.32, 0.018, 14, 160);
    const haloMaterial = new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.42 });
    const halos = [0, 1, 2].map((haloIndex) => {
      const halo = new THREE.Mesh(haloGeometry, haloMaterial.clone());
      halo.rotation.set(1.15 + haloIndex * 0.46, haloIndex * 0.85, -0.28 + haloIndex * 0.18);
      coreGroup.add(halo);
      return halo;
    });

    const nodeGeometry = new THREE.SphereGeometry(0.09, 24, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const nodes = positions.map(([x, y, z], index) => {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial.clone());
      node.position.set(x * 0.74, y * 0.74, z + 0.34);
      const material = node.material as THREE.MeshBasicMaterial;
      material.color.setHex(colors[index]);
      coreGroup.add(node);
      return node;
    });

    const connectorMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.24 });
    const connectors = nodes.map((node) => {
      const connector = new THREE.Line(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0, 0, 0), node.position.clone()]),
        connectorMaterial.clone()
      );
      coreGroup.add(connector);
      return connector;
    });

    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 90;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSeeds = Array.from({ length: particleCount }, (_, index) => ({
      radius: 2.05 + (index % 9) * 0.16,
      speed: 0.16 + (index % 7) * 0.018,
      angle: (index / particleCount) * Math.PI * 2,
      height: -1.25 + (index % 13) * 0.22,
    }));

    particleGeometry.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xf97316,
      size: 0.032,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    const pathMaterial = new THREE.LineBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.32 });
    const pathPoints = positions.map(([x, y, z]) => new THREE.Vector3(x, y, z));
    const path = new THREE.Line(new THREE.BufferGeometry().setFromPoints(pathPoints), pathMaterial);
    group.add(path);

    const ringGeometry = new THREE.TorusGeometry(3.05, 0.014, 12, 140);
    const ringMaterial = new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.22 });
    const ring = new THREE.Mesh(ringGeometry, ringMaterial);
    ring.rotation.set(1.2, 0, -0.34);
    group.add(ring);

    const grid = new THREE.GridHelper(7, 18, 0xf97316, 0x111827);
    grid.position.set(0, -2.05, -1.7);
    grid.rotation.z = -0.18;
    const gridMaterial = Array.isArray(grid.material) ? grid.material[0] : grid.material;
    gridMaterial.transparent = true;
    gridMaterial.opacity = 0.18;
    group.add(grid);

    const handlePointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = -((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    mount.addEventListener("pointermove", handlePointerMove);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    resize();
    const observer = new ResizeObserver(resize);
    observer.observe(mount);

    let frameId = 0;
    const clock = new THREE.Clock();

    const render = () => {
      const elapsed = clock.getElapsedTime();
      group.rotation.y = Math.sin(elapsed * 0.28) * 0.2 + pointer.x * 0.08;
      group.rotation.x = -0.13 + Math.sin(elapsed * 0.22) * 0.045 + pointer.y * 0.05;
      group.rotation.z = -0.17 + Math.sin(elapsed * 0.18) * 0.035;
      group.position.y = Math.sin(elapsed * 0.55) * 0.12;
      ring.rotation.z = -0.34 + elapsed * 0.14;
      core.rotation.x = elapsed * 0.32;
      core.rotation.y = elapsed * 0.46;
      coreWire.rotation.x = -elapsed * 0.24;
      coreWire.rotation.y = elapsed * 0.34;

      halos.forEach((halo, index) => {
        halo.rotation.z += 0.005 + index * 0.0015;
        halo.rotation.x += 0.0018;
      });

      nodes.forEach((node, index) => {
        const pulse = 1 + Math.sin(elapsed * 1.6 + index) * 0.22;
        node.scale.setScalar(pulse);
        const connector = connectors[index];
        const connectorMaterial = connector.material as THREE.LineBasicMaterial;
        connectorMaterial.opacity = 0.16 + Math.max(0, Math.sin(elapsed * 1.25 + index * 0.72)) * 0.22;
      });

      const particleAttribute = particleGeometry.getAttribute("position") as THREE.BufferAttribute;
      particleSeeds.forEach((seed, index) => {
        const angle = seed.angle + elapsed * seed.speed;
        const verticalWave = Math.sin(elapsed * 0.7 + index * 0.3) * 0.22;
        particleAttribute.setXYZ(
          index,
          Math.cos(angle) * seed.radius,
          seed.height + verticalWave,
          Math.sin(angle) * seed.radius * 0.42 - 0.45
        );
      });
      particleAttribute.needsUpdate = true;

      cards.forEach(({ cardGroup }, index) => {
        cardGroup.position.z = positions[index][2] + Math.sin(elapsed * 0.82 + index) * 0.09;
        cardGroup.rotation.y += Math.sin(elapsed + index) * 0.0009;
      });

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      mount.removeEventListener("pointermove", handlePointerMove);
      renderer.dispose();
      cards.forEach(({ cardGroup, geometry, material, edge, labelTexture }) => {
        geometry.dispose();
        material.dispose();
        edge.geometry.dispose();
        labelTexture.dispose();
        cardGroup.children.forEach((child) => {
          if (child instanceof THREE.Mesh && child.geometry !== geometry) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((childMaterial) => childMaterial.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      });
      path.geometry.dispose();
      pathMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      coreGeometry.dispose();
      coreMaterial.dispose();
      coreWire.geometry.dispose();
      if (Array.isArray(coreWire.material)) {
        coreWire.material.forEach((material) => material.dispose());
      } else {
        coreWire.material.dispose();
      }
      haloGeometry.dispose();
      halos.forEach((halo) => {
        if (Array.isArray(halo.material)) {
          halo.material.forEach((material) => material.dispose());
        } else {
          halo.material.dispose();
        }
      });
      nodeGeometry.dispose();
      nodes.forEach((node) => {
        if (Array.isArray(node.material)) {
          node.material.forEach((material) => material.dispose());
        } else {
          node.material.dispose();
        }
      });
      connectors.forEach((connector) => {
        connector.geometry.dispose();
        if (Array.isArray(connector.material)) {
          connector.material.forEach((material) => material.dispose());
        } else {
          connector.material.dispose();
        }
      });
      particleGeometry.dispose();
      particleMaterial.dispose();
      grid.geometry.dispose();
      if (Array.isArray(grid.material)) {
        grid.material.forEach((material) => material.dispose());
      } else {
        grid.material.dispose();
      }
      mount.removeChild(renderer.domElement);
    };
  }, [tone]);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
