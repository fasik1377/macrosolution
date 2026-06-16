"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

type SoftwareScrollSceneProps = {
  progressRootId?: string;
  className?: string;
  stage?: "website" | "mobile" | "desktopErp" | "webDev";
};

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

function makeDesktopTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 980;
  canvas.height = 620;
  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#FFFFFF");
  gradient.addColorStop(1, "#E8F2FF");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "#071B3D";
  context.fillRect(0, 0, 230, canvas.height);
  context.fillStyle = "#FFFFFF";
  context.font = "800 34px Arial";
  context.fillText("Desktop App", 36, 66);

  ["ERP", "POS", "Payroll", "Reports"].forEach((item, index) => {
    context.fillStyle = index === 0 ? "#0B5ED7" : "rgba(255,255,255,0.14)";
    roundRect(context, 28, 112 + index * 78, 174, 48, 14);
    context.fill();
    context.fillStyle = "#FFFFFF";
    context.font = "700 20px Arial";
    context.fillText(item, 54, 143 + index * 78);
  });

  context.fillStyle = "#002868";
  context.font = "800 38px Arial";
  context.fillText("Operations Console", 278, 84);
  context.fillStyle = "#5F7188";
  context.font = "600 21px Arial";
  context.fillText("Role-based workflows for finance, stock, HR, and service teams.", 278, 122);

  [
    [278, 176, 284, 150, "#0B5ED7", "Inventory"],
    [596, 176, 284, 150, "#083B8A", "Payroll"],
    [278, 374, 602, 138, "#4D9FFF", "Approval queue"],
  ].forEach(([x, y, w, h, color, label]) => {
    context.fillStyle = "#FFFFFF";
    roundRect(context, Number(x), Number(y), Number(w), Number(h), 24);
    context.fill();
    context.fillStyle = String(color);
    roundRect(context, Number(x) + 24, Number(y) + 24, 58, 58, 16);
    context.fill();
    context.fillStyle = "#071B3D";
    context.font = "800 26px Arial";
    context.fillText(String(label), Number(x) + 104, Number(y) + 62);
    context.fillStyle = "#9AAEC7";
    roundRect(context, Number(x) + 104, Number(y) + 84, Number(w) - 148, 16, 8);
    context.fill();
  });

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

function makeSecurityTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 640;
  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  const gradient = context.createRadialGradient(320, 260, 60, 320, 320, 420);
  gradient.addColorStop(0, "#4D9FFF");
  gradient.addColorStop(0.45, "#0B5ED7");
  gradient.addColorStop(1, "#071B3D");
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.strokeStyle = "#FFFFFF";
  context.lineWidth = 18;
  context.beginPath();
  context.moveTo(320, 112);
  context.lineTo(466, 176);
  context.lineTo(438, 390);
  context.quadraticCurveTo(320, 520, 202, 390);
  context.lineTo(174, 176);
  context.closePath();
  context.stroke();

  context.fillStyle = "#FFFFFF";
  context.font = "800 52px Arial";
  context.textAlign = "center";
  context.fillText("Secure", 320, 308);
  context.font = "700 28px Arial";
  context.fillText("Networks + Data", 320, 356);

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function setOpacity(group: THREE.Object3D, opacity: number) {
  group.traverse((child) => {
    if (child instanceof THREE.Mesh || child instanceof THREE.Line || child instanceof THREE.Points) {
      const materials = Array.isArray(child.material) ? child.material : [child.material];
      materials.forEach((material) => {
        material.transparent = true;
        material.opacity = opacity;
      });
    }
  });
}

export default function SoftwareScrollScene({ progressRootId, className = "absolute inset-0", stage }: SoftwareScrollSceneProps) {
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

    const ambient = new THREE.AmbientLight(0xffffff, 1.55);
    const key = new THREE.DirectionalLight(0xffffff, 3.1);
    const fill = new THREE.PointLight(0x4d9fff, 4.2, 18);
    key.position.set(4, 5, 6);
    fill.position.set(-3.8, 1.8, 3.4);
    scene.add(ambient, key, fill);

    const productGroup = new THREE.Group();
    scene.add(productGroup);

    const websiteTexture = makeWebsiteTexture();
    const mobileTexture = makeMobileTexture();
    const desktopTexture = makeDesktopTexture();
    const codeTexture = makeCodeTexture();
    const securityTexture = makeSecurityTexture();

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

    const desktop = new THREE.Group();
    const desktopFrame = new THREE.Mesh(
      new THREE.BoxGeometry(4.35, 2.76, 0.16),
      new THREE.MeshPhysicalMaterial({ color: 0xf6fbff, roughness: 0.22, metalness: 0.1, clearcoat: 0.42 })
    );
    const desktopScreen = new THREE.Mesh(
      new THREE.PlaneGeometry(4.12, 2.5),
      new THREE.MeshBasicMaterial({ map: desktopTexture })
    );
    desktopScreen.position.z = 0.087;
    const desktopKeyboard = new THREE.Mesh(
      new THREE.BoxGeometry(3.15, 0.18, 0.9),
      new THREE.MeshPhysicalMaterial({ color: 0xd9e8f8, roughness: 0.32, metalness: 0.14 })
    );
    desktopKeyboard.position.set(0, -1.85, 0.38);
    desktop.add(desktopFrame, desktopScreen, desktopKeyboard);
    productGroup.add(desktop);

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

    const dataGroup = new THREE.Group();
    const moduleColors = [0x0b5ed7, 0x083b8a, 0x4d9fff, 0xffffff, 0x002868, 0x79d7ff];
    const dataModules = moduleColors.map((color, index) => {
      const dataBlock = new THREE.Mesh(
        new THREE.BoxGeometry(0.78, 0.5, 0.5),
        new THREE.MeshPhysicalMaterial({
          color,
          roughness: 0.24,
          metalness: color === 0xffffff ? 0.04 : 0.18,
          transparent: true,
          opacity: color === 0xffffff ? 0.88 : 0.96,
          clearcoat: 0.42,
        })
      );
      dataBlock.position.set((index % 3 - 1) * 0.92, index < 3 ? 0.42 : -0.34, (index % 2) * 0.22);
      dataGroup.add(dataBlock);
      return dataBlock;
    });
    const dataModuleBaseY = dataModules.map((dataBlock) => dataBlock.position.y);
    productGroup.add(dataGroup);

    const securityGroup = new THREE.Group();
    const securityDisk = new THREE.Mesh(
      new THREE.CylinderGeometry(1.12, 1.12, 0.2, 64),
      new THREE.MeshPhysicalMaterial({ color: 0x071b3d, roughness: 0.18, metalness: 0.22, clearcoat: 0.55 })
    );
    securityDisk.rotation.x = Math.PI / 2;
    const securityFace = new THREE.Mesh(
      new THREE.PlaneGeometry(1.78, 1.78),
      new THREE.MeshBasicMaterial({ map: securityTexture, transparent: true })
    );
    securityFace.position.z = 0.11;
    securityGroup.add(securityDisk, securityFace);
    productGroup.add(securityGroup);

    const launchGroup = new THREE.Group();
    const launchCore = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.76, 2),
      new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.16, metalness: 0.08, transparent: true, opacity: 0.86, clearcoat: 0.72 })
    );
    const launchRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.42, 0.025, 16, 120),
      new THREE.MeshBasicMaterial({ color: 0x4d9fff, transparent: true, opacity: 0.62 })
    );
    const launchRingTwo = launchRing.clone();
    launchRingTwo.rotation.set(1.35, 0.28, 0.72);
    launchGroup.add(launchCore, launchRing, launchRingTwo);
    productGroup.add(launchGroup);

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
      const progressRoot = progressRootId ? document.getElementById(progressRootId) : null;
      const rect = (progressRoot ?? mount).getBoundingClientRect();
      const viewport = window.innerHeight || 1;

      if (progressRoot) {
        return THREE.MathUtils.clamp(-rect.top / Math.max(rect.height - viewport, 1), 0, 1);
      }

      return THREE.MathUtils.clamp((viewport - rect.top) / (viewport + rect.height), 0, 1);
    };

    const mix = THREE.MathUtils.lerp;

    const render = () => {
      const elapsed = clock.getElapsedTime();
      const localProgress = getProgress();
      const progress = localProgress;

      productGroup.rotation.y = mix(-0.36, 0.36, progress) + Math.sin(elapsed * 0.18) * 0.035;
      productGroup.rotation.x = mix(0.08, -0.1, progress);
      productGroup.position.y = mix(-0.06, 0.16, progress);
      productGroup.scale.setScalar(0.92 + Math.sin(progress * Math.PI) * 0.08);

      dataModules.forEach((dataBlock, index) => {
        dataBlock.position.y = dataModuleBaseY[index] + Math.sin(elapsed * 1.2 + index) * 0.055;
      });
      launchCore.rotation.set(elapsed * 0.3, elapsed * 0.42, 0);
      launchRing.rotation.z = elapsed * 0.18;
      launchRingTwo.rotation.z = -elapsed * 0.14;
      cloudGroup.rotation.y = elapsed * 0.18;
      cloudGroup.scale.setScalar(0.72 + Math.sin(elapsed * 1.4) * 0.025);

      setOpacity(website, 0);
      setOpacity(mobile, 0);
      setOpacity(desktop, 0);
      setOpacity(codePanel, 0);
      setOpacity(dataGroup, 0);
      setOpacity(securityGroup, 0);
      setOpacity(launchGroup, 0);
      setOpacity(cloudGroup, 0);

      if (stage === "mobile") {
        const cardSpread = THREE.MathUtils.smoothstep(progress, 0.18, 0.76);
        productGroup.rotation.y = mix(0.54, -0.34, progress) + Math.sin(elapsed * 0.26) * 0.04;
        productGroup.rotation.x = mix(-0.06, 0.08, progress);
        productGroup.scale.setScalar(1.18);

        mobile.position.set(mix(1.7, 0.98, cardSpread), mix(-0.2, 0.24, progress), mix(0.48, 0.22, progress));
        mobile.rotation.set(-0.05, mix(-0.55, -0.16, progress), mix(0.11, -0.04, progress));
        setOpacity(mobile, 1);

        codePanel.position.set(mix(-1.8, -0.92, cardSpread), mix(-1.26, -0.86, progress), mix(-0.48, 0.06, progress));
        codePanel.rotation.set(-0.12, mix(0.28, -0.08, progress), 0.04);
        setOpacity(codePanel, 0.72);

        dataGroup.position.set(mix(-1.08, -0.28, cardSpread), mix(1.14, 0.78, progress), mix(-0.42, 0.08, progress));
        dataGroup.rotation.set(elapsed * 0.08, mix(-0.3, 0.28, progress), 0.04);
        setOpacity(dataGroup, 0.86);

        cloudGroup.position.set(1.82, 1.08, -0.28);
        setOpacity(cloudGroup, 0.66);
      } else if (stage === "desktopErp") {
        const assemble = THREE.MathUtils.smoothstep(progress, 0.16, 0.82);
        productGroup.rotation.y = mix(-0.18, 0.3, progress) + Math.sin(elapsed * 0.2) * 0.026;
        productGroup.rotation.x = mix(0.12, -0.08, progress);
        productGroup.scale.setScalar(1.14);

        desktop.position.set(mix(1.04, 0.36, assemble), mix(-0.38, -0.22, progress), mix(-0.04, 0.2, progress));
        desktop.rotation.set(-0.12, mix(0.18, -0.12, progress), mix(-0.04, 0.04, progress));
        setOpacity(desktop, 1);

        dataGroup.position.set(mix(-1.92, -1.28, assemble), mix(0.78, 0.46, progress), mix(-0.4, 0.12, progress));
        dataGroup.rotation.set(elapsed * 0.08, mix(-0.28, 0.22, progress), 0.04);
        setOpacity(dataGroup, 0.92);

        securityGroup.position.set(mix(2.08, 1.58, assemble), mix(0.86, 0.44, progress), mix(-0.5, 0.1, progress));
        securityGroup.rotation.set(0.04, elapsed * 0.12 + mix(-0.18, 0.18, progress), 0);
        setOpacity(securityGroup, 0.76);

        cloudGroup.position.set(0.18, 1.42, -0.36);
        setOpacity(cloudGroup, 0.58);
      } else if (stage === "webDev") {
        const build = THREE.MathUtils.smoothstep(progress, 0.12, 0.86);
        productGroup.rotation.y = mix(-0.28, 0.34, progress) + Math.sin(elapsed * 0.24) * 0.04;
        productGroup.rotation.x = mix(0.08, -0.1, progress);
        productGroup.scale.setScalar(1.1 + build * 0.14);

        website.position.set(mix(-0.52, 0.12, build), mix(0.08, 0.32, progress), mix(0.16, 0.24, progress));
        website.rotation.set(-0.04, mix(-0.28, 0.18, progress), mix(0.04, -0.035, progress));
        setOpacity(website, 1);

        codePanel.position.set(mix(1.58, 0.98, build), mix(-1.22, -0.72, progress), mix(-0.52, 0.06, progress));
        codePanel.rotation.set(-0.12, mix(-0.18, -0.36, progress), 0.05);
        setOpacity(codePanel, 0.9);

        dataGroup.position.set(mix(-1.48, -1.0, build), mix(-0.82, -0.46, progress), mix(-0.38, 0.08, progress));
        dataGroup.rotation.set(elapsed * 0.08, mix(-0.32, 0.3, progress), 0.04);
        setOpacity(dataGroup, 0.82);

        cloudGroup.position.set(mix(1.36, 0.82, build), mix(1.32, 1.0, progress), -0.28);
        setOpacity(cloudGroup, 0.78);
      } else {
        const panels = THREE.MathUtils.smoothstep(progress, 0.16, 0.72);
        productGroup.rotation.y = mix(-0.44, 0.26, progress) + Math.sin(elapsed * 0.18) * 0.035;
        productGroup.rotation.x = mix(0.08, -0.08, progress);
        productGroup.scale.setScalar(1.32 + panels * 0.18);

        website.position.set(mix(0.94, 1.38, panels), mix(0.1, 0.3, progress), mix(0.24, 0.06, progress));
        website.rotation.set(-0.04, mix(-0.14, 0.18, progress), mix(0.03, -0.035, progress));
        setOpacity(website, 1);

        codePanel.position.set(mix(-1.52, -0.92, panels), mix(-1.12, -0.72, progress), mix(-0.48, 0.08, progress));
        codePanel.rotation.set(-0.12, mix(-0.12, -0.28, progress), 0.04);
        setOpacity(codePanel, 0.84);

        cloudGroup.position.set(mix(-1.02, -0.48, panels), mix(1.26, 1.02, progress), -0.28);
        setOpacity(cloudGroup, 0.74);
      }

      const points = [
        new THREE.Vector3(website.position.x + 1.65, website.position.y - 0.25, website.position.z + 0.14),
        new THREE.Vector3(desktop.position.x + 0.9, desktop.position.y + 0.3, desktop.position.z + 0.14),
        new THREE.Vector3(codePanel.position.x, codePanel.position.y + 0.88, codePanel.position.z + 0.14),
        new THREE.Vector3(mobile.position.x - 0.54, mobile.position.y + 0.18, mobile.position.z + 0.14),
        new THREE.Vector3(dataGroup.position.x, dataGroup.position.y, dataGroup.position.z + 0.16),
        new THREE.Vector3(securityGroup.position.x, securityGroup.position.y, securityGroup.position.z + 0.14),
        new THREE.Vector3(cloudGroup.position.x, cloudGroup.position.y - 0.34, cloudGroup.position.z + 0.12),
        new THREE.Vector3(launchGroup.position.x, launchGroup.position.y, launchGroup.position.z + 0.12),
      ];
      connectionGeometry.setFromPoints(points);
      connectionMaterial.opacity = stage === "mobile" || stage === "desktopErp" || stage === "webDev" ? 0.38 : 0.34;

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
      [websiteTexture, mobileTexture, desktopTexture, codeTexture, securityTexture].forEach((texture) => texture.dispose());
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
      desktop.traverse((child) => {
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
      dataGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose());
          else child.material.dispose();
        }
      });
      securityGroup.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) child.material.forEach((material) => material.dispose());
          else child.material.dispose();
        }
      });
      launchGroup.traverse((child) => {
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
  }, [progressRootId, stage]);

  return <div ref={mountRef} className={className} aria-hidden="true" />;
}
