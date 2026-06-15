"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

function roundRect(context: CanvasRenderingContext2D, x: number, y: number, width: number, height: number, radius: number) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}

function makeWebsiteTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 1024;
  canvas.height = 640;
  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#F8FBFF");
  gradient.addColorStop(1, "#DCEBFF");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#071B3D";
  context.fillRect(0, 0, canvas.width, 72);
  ["#FF6B6B", "#FFD166", "#4D9FFF"].forEach((color, index) => {
    context.fillStyle = color;
    context.beginPath();
    context.arc(36 + index * 34, 36, 10, 0, Math.PI * 2);
    context.fill();
  });

  context.fillStyle = "#FFFFFF";
  context.font = "700 26px Arial";
  context.fillText("Business Dashboard", 158, 44);
  context.fillStyle = "#BFD7FF";
  context.font = "600 18px Arial";
  context.fillText("Live operations", 804, 44);

  context.fillStyle = "#002868";
  context.font = "800 44px Arial";
  context.fillText("Web Platform", 56, 148);
  context.fillStyle = "#45617F";
  context.font = "500 23px Arial";
  context.fillText("ERP, POS, analytics, and customer workflows in one responsive interface.", 56, 190);

  const cards = [
    ["Sales", "$48.2K", "#0B5ED7"],
    ["Orders", "1,284", "#083B8A"],
    ["Stock", "96%", "#18A0FB"],
  ];

  cards.forEach(([label, value, color], index) => {
    const x = 56 + index * 292;
    context.fillStyle = "#FFFFFF";
    roundRect(context, x, 232, 248, 126, 22);
    context.fill();
    context.fillStyle = color;
    roundRect(context, x + 22, 254, 56, 56, 16);
    context.fill();
    context.fillStyle = "#5F7188";
    context.font = "700 18px Arial";
    context.fillText(label, x + 98, 278);
    context.fillStyle = "#071B3D";
    context.font = "800 34px Arial";
    context.fillText(value, x + 98, 316);
  });

  context.strokeStyle = "#0B5ED7";
  context.lineWidth = 5;
  context.beginPath();
  context.moveTo(76, 512);
  [190, 312, 436, 562, 690, 826, 936].forEach((x, index) => {
    context.lineTo(x, 490 - Math.sin(index * 0.9) * 70);
  });
  context.stroke();

  context.fillStyle = "rgba(11,94,215,0.12)";
  roundRect(context, 56, 398, 912, 164, 26);
  context.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function makeMobileTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 420;
  canvas.height = 820;
  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = context.createLinearGradient(0, 0, 0, canvas.height);
  gradient.addColorStop(0, "#FFFFFF");
  gradient.addColorStop(1, "#EAF3FF");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#071B3D";
  roundRect(context, 28, 32, 364, 92, 28);
  context.fill();
  context.fillStyle = "#FFFFFF";
  context.font = "800 30px Arial";
  context.fillText("Mobile App", 58, 86);

  context.fillStyle = "#0B5ED7";
  roundRect(context, 38, 154, 344, 150, 34);
  context.fill();
  context.fillStyle = "#FFFFFF";
  context.font = "800 36px Arial";
  context.fillText("Tasks", 68, 214);
  context.font = "700 58px Arial";
  context.fillText("24", 68, 278);

  const rows = ["Approve order", "Stock alert", "Client follow-up", "Payroll ready"];
  rows.forEach((row, index) => {
    const y = 344 + index * 88;
    context.fillStyle = "#FFFFFF";
    roundRect(context, 38, y, 344, 64, 22);
    context.fill();
    context.fillStyle = index % 2 === 0 ? "#0B5ED7" : "#4D9FFF";
    context.beginPath();
    context.arc(72, y + 32, 12, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#071B3D";
    context.font = "700 22px Arial";
    context.fillText(row, 104, y + 40);
  });

  context.fillStyle = "#DDEBFF";
  roundRect(context, 108, 732, 204, 14, 7);
  context.fill();

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function makeCodeTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 760;
  canvas.height = 460;
  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  context.fillStyle = "#06162F";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#0B5ED7";
  context.fillRect(0, 0, canvas.width, 58);
  context.fillStyle = "#FFFFFF";
  context.font = "700 25px Arial";
  context.fillText("Application Logic", 28, 38);

  const lines = [
    "function syncDevices(data) {",
    "  const dashboard = renderWeb(data);",
    "  const mobile = renderApp(data);",
    "  return deploy({ dashboard, mobile });",
    "}",
  ];

  context.font = "600 25px Consolas, monospace";
  lines.forEach((line, index) => {
    context.fillStyle = index === 0 || index === 4 ? "#79D7FF" : "#DCEBFF";
    context.fillText(line, 34, 118 + index * 54);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

export default function SoftwareScrollScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
    camera.position.set(0, 0.72, 9.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      preserveDrawingBuffer: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.35);
    const key = new THREE.DirectionalLight(0xffffff, 2.7);
    const fill = new THREE.PointLight(0x4d9fff, 3.4, 16);
    key.position.set(4, 5, 6);
    fill.position.set(-3.8, 1.8, 3.4);
    scene.add(ambient, key, fill);

    const productGroup = new THREE.Group();
    scene.add(productGroup);

    const websiteTexture = makeWebsiteTexture();
    const mobileTexture = makeMobileTexture();
    const codeTexture = makeCodeTexture();

    const website = new THREE.Group();
    const websiteFrame = new THREE.Mesh(
      new THREE.BoxGeometry(4.9, 3.12, 0.16),
      new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.24, metalness: 0.08, clearcoat: 0.35 })
    );
    const websiteScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(4.62, 2.88),
      new THREE.MeshBasicMaterial({ map: websiteTexture })
    );
    websiteScreen.position.z = 0.086;
    const websiteStand = new THREE.Mesh(
      new THREE.BoxGeometry(0.42, 0.95, 0.18),
      new THREE.MeshPhysicalMaterial({ color: 0xdce8f8, roughness: 0.3, metalness: 0.18 })
    );
    websiteStand.position.set(0, -2.0, -0.06);
    const websiteBase = new THREE.Mesh(
      new THREE.BoxGeometry(2.1, 0.16, 0.74),
      new THREE.MeshPhysicalMaterial({ color: 0xc7d8ee, roughness: 0.28, metalness: 0.2 })
    );
    websiteBase.position.set(0, -2.48, 0.12);
    website.add(websiteFrame, websiteScreen, websiteStand, websiteBase);
    productGroup.add(website);

    const mobile = new THREE.Group();
    const mobileFrame = new THREE.Mesh(
      new THREE.BoxGeometry(1.42, 2.86, 0.2),
      new THREE.MeshPhysicalMaterial({ color: 0x071b3d, roughness: 0.2, metalness: 0.3, clearcoat: 0.65 })
    );
    const mobileScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(1.22, 2.55),
      new THREE.MeshBasicMaterial({ map: mobileTexture })
    );
    mobileScreen.position.z = 0.108;
    mobile.add(mobileFrame, mobileScreen);
    productGroup.add(mobile);

    const codePanel = new THREE.Group();
    const codeFrame = new THREE.Mesh(
      new THREE.BoxGeometry(3.12, 1.9, 0.12),
      new THREE.MeshPhysicalMaterial({ color: 0x071b3d, roughness: 0.26, metalness: 0.18, clearcoat: 0.32 })
    );
    const codeScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(2.92, 1.7),
      new THREE.MeshBasicMaterial({ map: codeTexture })
    );
    codeScreen.position.z = 0.07;
    codePanel.add(codeFrame, codeScreen);
    productGroup.add(codePanel);

    const cloudGroup = new THREE.Group();
    const cloudMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.2,
      metalness: 0.06,
      transparent: true,
      opacity: 0.86,
      clearcoat: 0.6,
    });
    [
      [-0.46, 0, 0, 0.42],
      [0, 0.18, 0, 0.56],
      [0.5, 0, 0, 0.42],
      [0.08, -0.18, 0, 0.52],
    ].forEach(([x, y, z, scale]) => {
      const cloudPart = new THREE.Mesh(new THREE.SphereGeometry(scale, 32, 18), cloudMaterial.clone());
      cloudPart.position.set(x, y, z);
      cloudGroup.add(cloudPart);
    });
    productGroup.add(cloudGroup);

    const connectionMaterial = new THREE.LineBasicMaterial({ color: 0x79d7ff, transparent: true, opacity: 0.45 });
    const connectionGeometry = new THREE.BufferGeometry();
    const connection = new THREE.Line(connectionGeometry, connectionMaterial);
    productGroup.add(connection);

    const syncMaterial = new THREE.MeshBasicMaterial({ color: 0x4d9fff, transparent: true, opacity: 0.86 });
    const syncDots = Array.from({ length: 9 }, () => {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.055, 20, 14), syncMaterial.clone());
      productGroup.add(dot);
      return dot;
    });

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

    const getProgress = () => {
      const rect = mount.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      return THREE.MathUtils.clamp((viewport - rect.top) / (viewport + rect.height), 0, 1);
    };

    const mix = THREE.MathUtils.lerp;

    const render = () => {
      const elapsed = clock.getElapsedTime();
      const progress = getProgress();
      const split = THREE.MathUtils.smoothstep(progress, 0.12, 0.45);
      const integrate = THREE.MathUtils.smoothstep(progress, 0.48, 0.92);

      productGroup.rotation.y = mix(-0.22, 0.24, progress) + Math.sin(elapsed * 0.18) * 0.035;
      productGroup.rotation.x = mix(0.06, -0.08, progress);
      productGroup.position.y = mix(-0.2, 0.28, progress);

      website.position.set(mix(0, -1.25, split) + mix(0, 0.55, integrate), mix(0.2, 0.15, progress), mix(0, -0.2, split));
      website.rotation.set(-0.04, mix(0, 0.18, split) - mix(0, 0.12, integrate), mix(0, -0.025, split));

      mobile.position.set(mix(0.68, 2.18, split) - mix(0, 0.8, integrate), mix(-0.2, 0.28, integrate), mix(0.62, 0.32, progress));
      mobile.rotation.set(-0.05, mix(-0.38, -0.18, integrate), mix(0.08, -0.03, integrate));

      codePanel.position.set(mix(0, 0.18, split), mix(-1.0, -1.55, split) + mix(0, 0.45, integrate), mix(-0.5, 0.12, integrate));
      codePanel.rotation.set(-0.12, mix(0.12, -0.16, progress), mix(0, 0.035, split));

      cloudGroup.position.set(mix(0, 0.62, split), mix(1.74, 1.28, integrate), mix(-0.8, 0.04, integrate));
      cloudGroup.rotation.y = elapsed * 0.18;
      cloudGroup.scale.setScalar(0.78 + Math.sin(elapsed * 1.4) * 0.025 + integrate * 0.16);

      const points = [
        new THREE.Vector3(website.position.x + 1.65, website.position.y - 0.25, website.position.z + 0.14),
        new THREE.Vector3(codePanel.position.x, codePanel.position.y + 0.88, codePanel.position.z + 0.14),
        new THREE.Vector3(mobile.position.x - 0.54, mobile.position.y + 0.18, mobile.position.z + 0.14),
        new THREE.Vector3(cloudGroup.position.x, cloudGroup.position.y - 0.34, cloudGroup.position.z + 0.12),
      ];
      connectionGeometry.setFromPoints(points);

      syncDots.forEach((dot, index) => {
        const pathIndex = index % (points.length - 1);
        const localT = (elapsed * 0.42 + progress * 1.8 + index * 0.18) % 1;
        dot.position.lerpVectors(points[pathIndex], points[pathIndex + 1], localT);
        dot.scale.setScalar(0.72 + Math.sin(elapsed * 2 + index) * 0.18);
      });

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(frameId);
      observer.disconnect();
      renderer.dispose();
      [websiteTexture, mobileTexture, codeTexture].forEach((texture) => texture.dispose());
      website.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose());
          else child.material.dispose();
        }
      });
      mobile.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose());
          else child.material.dispose();
        }
      });
      codePanel.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose());
          else child.material.dispose();
        }
      });
      cloudGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose());
          else child.material.dispose();
        }
      });
      connectionGeometry.dispose();
      connectionMaterial.dispose();
      syncDots.forEach((dot) => {
        dot.geometry.dispose();
        if (Array.isArray(dot.material)) dot.material.forEach((material) => material.dispose());
        else dot.material.dispose();
      });
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />;
}
