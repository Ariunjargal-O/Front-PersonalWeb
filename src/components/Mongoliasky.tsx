// const CanvasStarfield = () => {
//     const canvasRef = useRef<HTMLCanvasElement>(null);
  
//     useEffect(() => {
//       const canvas = canvasRef.current;
//       if (!canvas) return;
//       const ctx = canvas.getContext("2d");
//       if (!ctx) return;
  
//       let animationFrameId: number;
//       const numStars = 180;
  
//       const stars = Array.from({ length: numStars }).map(() => ({
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         radius: Math.random() * 1.5 + 0.3,
//         baseOpacity: Math.random() * 0.5 + 0.2,
//         flickerSpeed: Math.random() * 0.03 + 0.01,
//         angle: Math.random() * Math.PI * 2,
//       }));
  
//       const draw = () => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
  
//         // Background gradient - blue to deep purple
//         const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
//         gradient.addColorStop(0, "#01010f");
//         gradient.addColorStop(1, "#0c144a");
//         ctx.fillStyle = gradient;
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
  
//         // Draw stars with twinkling
//         stars.forEach((star) => {
//           star.angle += star.flickerSpeed;
//           const opacity = star.baseOpacity + Math.sin(star.angle) * 0.2;
  
//           ctx.beginPath();
//           ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
//           ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
//           ctx.fill();
//         });
  
//         animationFrameId = requestAnimationFrame(draw);
//       };
  
//       draw();
  
//       return () => cancelAnimationFrame(animationFrameId);
//     }, []);
  
//     return (
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none z-0"
//       />
//     );
//   };