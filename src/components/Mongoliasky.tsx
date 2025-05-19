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






// fantastic night sky
// "use client";
// import { useState, useEffect, useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// // Shooting Star Component
// const ShootingStar = ({ delay }: { delay: number }) => (
//   <motion.div
//     className="absolute w-0.5 h-2 bg-white"
//     style={{
//       top: `${Math.random() * 80}%`,
//       left: `${Math.random() * 100}%`,
//     }}
//     animate={{
//       x: [0, 200, 1000],
//       y: [0, 200, 300],
//       opacity: [1, 0, 0],
//     }}
//     transition={{
//       delay: delay,
//       duration: Math.random() * 1.5 + 1.5,
//       repeat: Infinity,
//       repeatDelay: 4,
//     }}
//   />
// );

// export function FloatingParticles() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

//   const containerRef = useRef(null);

//   interface Star {
//     id: number;
//     size: number;
//     top: number;
//     left: number;
//     animationDuration: number;
//     delay: number;
//     pulse: boolean;
//   }

//   const [stars, setStars] = useState<Star[]>([]);
//   const [shootingStars, setShootingStars] = useState<{ id: number; delay: number }[]>([]);

//   useEffect(() => {
//     const newStars = Array.from({ length: 150 }).map((_, i) => ({
//       id: i,
//       size: Math.random() < 0.8 ? Math.random() * 2 + 1 : Math.random() * 4 + 3,
//       top: Math.random() * 100,
//       left: Math.random() * 100,
//       animationDuration: Math.random() * 3 + 2,
//       delay: Math.random() * 3,
//       pulse: Math.random() > 0.7,
//     }));

//     const newShootingStars = Array.from({ length: 8 }).map((_, i) => ({
//       id: i,
//       delay: Math.random() * 15,
//     }));

//     setStars(newStars);
//     setShootingStars(newShootingStars);
//   }, []);

//   const { scrollYProgress: containerScrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start end", "end start"],
//   });

//   const opacity = useTransform(containerScrollYProgress, [0, 0.1, 0.9, 1], [0.5, 1, 1, 0.5]);

//   return (
//     <section
//       id="home"
//       ref={ref}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-black"
//     >
//       <div
//         className="absolute inset-0 w-full h-full"
//         style={{
//           background: "linear-gradient(to bottom, #000000 0%, #050520 100%)", // Darker gradient for night mode
//         }}
//       />

//       {/* Star field */}
//       <div className="absolute inset-0 w-full h-full">
//         {stars.map((star) => (
//           <motion.div
//             key={star.id}
//             className="absolute rounded-full bg-white"
//             style={{
//               width: star.size,
//               height: star.size,
//               top: `${star.top}%`,
//               left: `${star.left}%`,
//               boxShadow:
//                 star.size > 2
//                   ? `0 0 ${star.size * 3}px rgba(255, 255, 255, 0.9)` // Larger glowing stars
//                   : "0 0 1px #fff",
//             }}
//             animate={
//               star.pulse
//                 ? {
//                     opacity: [0.2, 1, 0.2],
//                     scale: [0.8, 1.3, 0.8], // Bigger pulse effect for some stars
//                   }
//                 : {
//                     opacity: [0.5, 1, 0.5],
//                     scale: [1, 1.1, 1],
//                   }
//             }
//             transition={{
//               duration: star.animationDuration,
//               repeat: Infinity,
//               delay: star.delay,
//             }}
//           />
//         ))}
//       </div>

//       {/* Shooting stars */}
//       <div className="absolute inset-0 w-full h-full overflow-hidden">
//         {shootingStars.map((star) => (
//           <ShootingStar key={star.id} delay={star.delay} />
//         ))}
//       </div>

//       {/* Galaxy nebulas/clusters - fewer, more subtle */}
//       <div className="absolute inset-0 w-full h-full">
//         {Array.from({ length: 3 }).map((_, i) => (
//           <motion.div
//             key={`galaxy-${i}`}
//             className="absolute rounded-full"
//             style={{
//               width: Math.random() * 400 + 200,
//               height: Math.random() * 400 + 200,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               background: `radial-gradient(circle, rgba(138, 43, 226, 0.2) 0%, rgba(75, 0, 130, 0.1) 50%, rgba(0, 0, 0, 0) 70%)`,
//             }}
//             animate={{
//               opacity: [0.3, 0.6, 0.3],
//               scale: [0.9, 1.1, 0.9],
//             }}
//             transition={{
//               duration: Math.random() * 20 + 30,
//               repeat: Infinity,
//               repeatType: "reverse",
//               delay: Math.random() * 5,
//             }}
//           />
//         ))}

//         {/* Add a subtle blue nebula */}
//         <motion.div
//           className="absolute rounded-full"
//           style={{
//             width: 700,
//             height: 700,
//             top: "25%",
//             right: "15%",
//             background: `radial-gradient(circle, rgba(30, 144, 255, 0.05) 0%, rgba(0, 0, 139, 0.05) 50%, rgba(0, 0, 0, 0) 70%)`,
//           }}
//           animate={{
//             opacity: [0.3, 0.6, 0.3],
//             scale: [0.9, 1.1, 0.9],
//           }}
//           transition={{
//             duration: 30,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//         />
//       </div>

//       {/* Background gradient */}
//       <div className="absolute inset-0 -z-10">
//         <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent"></div>
//         <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background to-transparent"></div>
//       </div>
//     </section>
//   );
// }
