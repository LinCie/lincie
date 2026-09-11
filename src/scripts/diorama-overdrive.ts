import gsap from "gsap";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  phase: number;
  phaseSpeed: number;
  color: string;
  isFleck?: boolean;
  angle?: number;
  vAngle?: number;
  width?: number;
  height?: number;
}

interface CanvasInstance {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  tone: string;
  particles: Particle[];
  width: number;
  height: number;
}

/**
 * Initializes Overdrive Direction 3 for Homepage Dioramas:
 * 1. 2.5D Holographic 3D Tilt with spring physics and depth planes
 * 2. Dynamic specular glass reflection / glare sweep
 * 3. Atmospheric floating particulate engine customized by tone with RAF power-management
 */
export function initDioramaOverdrive(signal: AbortSignal): void {
  const stages = document.querySelectorAll<HTMLElement>("[data-diorama-stage]");
  if (!stages.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const isTouch = window.matchMedia("(hover: none)").matches;

  // 1. 3D Tilt & Specular Glare (Desktop & Non-Reduced-Motion)
  if (!isTouch && !prefersReducedMotion) {
    stages.forEach((stage) => {
      const card = stage.querySelector<HTMLElement>("[data-diorama-card]");
      const glare = stage.querySelector<HTMLElement>("[data-diorama-glare]");
      const back = stage.querySelector<HTMLElement>("[data-diorama-back]");
      const mid = stage.querySelector<HTMLElement>("[data-diorama-mid]");
      const front = stage.querySelector<HTMLElement>("[data-diorama-front]");
      const sign = stage.querySelector<HTMLElement>("[data-diorama-sign]");
      const canvas = stage.querySelector<HTMLCanvasElement>(
        "canvas[data-particle-canvas]",
      );

      if (!card) return;

      // Establish depth planes on Z axis inside 3D preserve-3d context
      gsap.set(card, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });
      if (back) gsap.set(back, { z: -22 });
      if (mid) gsap.set(mid, { z: 18 });
      if (front) gsap.set(front, { z: 38 });
      if (sign) gsap.set(sign, { z: 54 });
      if (canvas) gsap.set(canvas, { z: 26 });

      const quickRotX = gsap.quickTo(card, "rotationX", {
        duration: 0.4,
        ease: "power2.out",
      });
      const quickRotY = gsap.quickTo(card, "rotationY", {
        duration: 0.4,
        ease: "power2.out",
      });

      stage.addEventListener(
        "pointermove",
        (e: PointerEvent) => {
          const rect = card.getBoundingClientRect();
          const normX = (e.clientX - rect.left) / rect.width - 0.5;
          const normY = (e.clientY - rect.top) / rect.height - 0.5;

          // Clamped rotation +/- 8.5 degrees
          const rotY = normX * 17;
          const rotX = -normY * 17;

          quickRotX(rotX);
          quickRotY(rotY);

          if (glare) {
            glare.style.opacity = "0.68";
            const gx = ((normX + 0.5) * 100).toFixed(1);
            const gy = ((normY + 0.5) * 100).toFixed(1);
            glare.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255, 255, 255, 0.48) 0%, rgba(255, 255, 255, 0.12) 36%, transparent 70%)`;
          }
        },
        { signal },
      );

      stage.addEventListener(
        "pointerleave",
        () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.75,
            ease: "elastic.out(1, 0.45)",
          });
          if (glare) {
            gsap.to(glare, {
              opacity: 0,
              duration: 0.4,
              ease: "power2.out",
            });
          }
        },
        { signal },
      );
    });
  }

  // 2. Ambient Floating Particulate Engine
  if (!prefersReducedMotion) {
    const instances: CanvasInstance[] = [];
    const activeCanvases = new Set<CanvasInstance>();
    let animationFrameId: number | null = null;

    stages.forEach((stage) => {
      const canvas = stage.querySelector<HTMLCanvasElement>(
        "canvas[data-particle-canvas]",
      );
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const tone = canvas.getAttribute("data-particle-canvas") || "house";
      const width = canvas.width || 360;
      const height = canvas.height || 260;

      const count = isTouch ? 10 : 20;
      const particles: Particle[] = [];

      for (let i = 0; i < count; i++) {
        let color = "rgba(255, 212, 121, ";
        let isFleck = false;
        let vx = (Math.random() - 0.5) * 0.25;
        let vy = -0.15 - Math.random() * 0.25;

        if (tone === "house") {
          // Warm golden sunbeam dust motes
          const palette = [
            "rgba(255, 212, 121, ",
            "rgba(247, 242, 232, ",
            "rgba(212, 154, 72, ",
          ];
          color = palette[i % palette.length];
        } else if (tone === "field") {
          // Shimmering morning mist & golden pollen floating on gentle breeze
          const palette = [
            "rgba(168, 203, 212, ",
            "rgba(212, 154, 72, ",
            "rgba(220, 231, 201, ",
          ];
          color = palette[i % palette.length];
          vx = 0.2 + Math.random() * 0.35; // gentle horizontal drift across paddies
          vy = (Math.random() - 0.5) * 0.18;
        } else if (tone === "workshop") {
          // Timber shavings & tiny glowing sparks in lamp light
          const palette = [
            "rgba(255, 180, 80, ",
            "rgba(255, 212, 121, ",
            "rgba(184, 97, 75, ",
          ];
          color = palette[i % palette.length];
          vy = 0.12 + Math.random() * 0.28; // gentle downward drift in light beam
        } else if (tone === "thoughts") {
          // Tranquil air motes drifting upward quietly
          const palette = [
            "rgba(255, 253, 248, ",
            "rgba(201, 224, 226, ",
            "rgba(233, 221, 201, ",
          ];
          color = palette[i % palette.length];
          vy = -0.12 - Math.random() * 0.22;
        } else if (tone === "letterbox") {
          // Paper flecks & light breeze motes
          const palette = [
            "rgba(245, 237, 228, ",
            "rgba(184, 97, 75, ",
            "rgba(255, 253, 248, ",
          ];
          color = palette[i % palette.length];
          isFleck = i % 2 === 0;
          vx = 0.15 + Math.random() * 0.25;
          vy = -0.1 - Math.random() * 0.2;
        }

        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx,
          vy,
          radius: 0.9 + Math.random() * 1.5,
          alpha: 0.2 + Math.random() * 0.5,
          baseAlpha: 0.2 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
          phaseSpeed: 0.015 + Math.random() * 0.025,
          color,
          isFleck,
          angle: Math.random() * Math.PI * 2,
          vAngle: (Math.random() - 0.5) * 0.03,
          width: 2 + Math.random() * 2.5,
          height: 1.2 + Math.random() * 1.8,
        });
      }

      const instance: CanvasInstance = {
        canvas,
        ctx,
        tone,
        particles,
        width,
        height,
      };
      instances.push(instance);
    });

    function renderLoop() {
      activeCanvases.forEach((inst) => {
        const { ctx, particles, width, height } = inst;
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.phase += p.phaseSpeed;
          p.alpha = p.baseAlpha * (0.7 + 0.3 * Math.sin(p.phase));

          p.x += p.vx + Math.sin(p.phase * 0.8) * 0.25;
          p.y += p.vy;

          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          if (p.isFleck && p.angle !== undefined && p.vAngle !== undefined) {
            p.angle += p.vAngle;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.angle);
            ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`;
            ctx.fillRect(
              -(p.width || 2) / 2,
              -(p.height || 2) / 2,
              p.width || 2,
              p.height || 2,
            );
            ctx.restore();
          } else {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `${p.color}${p.alpha.toFixed(2)})`;
            ctx.fill();
          }
        }
      });

      if (activeCanvases.size > 0) {
        animationFrameId = requestAnimationFrame(renderLoop);
      } else {
        animationFrameId = null;
      }
    }

    // IntersectionObserver: Pause RAF whenever dioramas are not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const inst = instances.find((item) => item.canvas === entry.target);
          if (!inst) return;

          if (entry.isIntersecting) {
            activeCanvases.add(inst);
            if (animationFrameId === null) {
              animationFrameId = requestAnimationFrame(renderLoop);
            }
          } else {
            activeCanvases.delete(inst);
          }
        });
      },
      { threshold: 0.05 },
    );

    instances.forEach((inst) => observer.observe(inst.canvas));

    signal.addEventListener("abort", () => {
      observer.disconnect();
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
      }
      activeCanvases.clear();
    });
  }
}
