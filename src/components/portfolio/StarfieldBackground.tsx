import React, { useEffect, useRef } from 'react';

const StarfieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    const numStars = 400;
    const speed = 2; // Speed of travel

    class Star {
      x: number;
      y: number;
      z: number;
      px: number;
      py: number;

      constructor() {
        this.px = 0;
        this.py = 0;
        this.x = (Math.random() - 0.5) * canvas!.width * 2;
        this.y = (Math.random() - 0.5) * canvas!.height * 2;
        this.z = Math.random() * canvas!.width;
      }

      update() {
        this.z -= speed;
        if (this.z <= 0) {
          this.z = canvas!.width;
          this.x = (Math.random() - 0.5) * canvas!.width * 2;
          this.y = (Math.random() - 0.5) * canvas!.height * 2;
        }
      }

      show() {
        if (!ctx || !canvas) return;
        
        ctx.fillStyle = 'white';
        ctx.beginPath();

        const sx = (this.x / this.z) * canvas.width + canvas.width / 2;
        const sy = (this.y / this.z) * canvas.height + canvas.height / 2;

        const r = (1 - this.z / canvas.width) * 2;
        ctx.arc(sx, sy, r, 0, Math.PI * 2);
        ctx.fill();

        // Draw light trails for better "warp" effect
        if (this.px !== 0) {
          ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 + (1 - this.z / canvas.width) * 0.4})`;
          ctx.lineWidth = r;
          ctx.beginPath();
          ctx.moveTo(this.px, this.py);
          ctx.lineTo(sx, sy);
          ctx.stroke();
        }

        this.px = sx;
        this.py = sy;
      }
    }

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      stars = Array.from({ length: numStars }, () => new Star());
    };

    const animate = () => {
      ctx.fillStyle = 'black'; // Cosmic black background for contact section
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.update();
        star.show();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', init);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 bg-black"
      style={{ opacity: 0.8 }}
    />
  );
};

export default StarfieldBackground;
