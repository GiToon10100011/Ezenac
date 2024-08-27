const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

//2차 베지에 곡선
// quadracticCurveTo(조절점x, 조절점y, x, y)

// ctx.beginPath();
// ctx.moveTo(50, 200);
// ctx.quadraticCurveTo(200, 50, 350, 200);
// // ctx.closePath();
// ctx.stroke();
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.quadraticCurveTo(100, 50, 150, 100);
// ctx.quadraticCurveTo(200, 150, 250, 100);
// ctx.quadraticCurveTo(300, 50, 350, 100);
// ctx.stroke();
// ctx.closePath();

//3차 베지에곡선
//bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
//얘는 조절점이 2개
// ctx.beginPath();
// ctx.moveTo(50, 100);
// ctx.bezierCurveTo(90, 250, 310, 10, 350, 100);
// ctx.strokeStyle = "green"
// ctx.stroke();

let triangle = new Path2D();
triangle.moveTo(100, 100);
triangle.lineTo(300, 100);
triangle.lineTo(200, 260);
triangle.closePath();

let circle = new Path2D();
circle.arc(200, 155, 50, 0, Math.PI * 2);

ctx.stroke(triangle);
ctx.fillStyle = "green";
ctx.fill(circle);

// // Create a neon grid pattern
//         const createNeonGrid = () => {
//             const gridSize = 50;
//             const lineWidth = 3;
//             const neonColor = '#39FF14';

//             ctx.strokeStyle = neonColor;
//             ctx.lineWidth = lineWidth;
//             ctx.shadowBlur = 20;
//             ctx.shadowColor = neonColor;

//             for (let i = 0; i <= canvas.width; i += gridSize) {
//                 ctx.beginPath();
//                 ctx.moveTo(i, 0);
//                 ctx.lineTo(i, canvas.height);
//                 ctx.stroke();

//                 ctx.beginPath();
//                 ctx.moveTo(0, i);
//                 ctx.lineTo(canvas.width, i);
//                 ctx.stroke();
//             }
//         };

//         // Draw a rotating neon hexagon
//         const drawNeonHexagon = (x, y, size, rotation) => {
//             const neonColor = '#FF007F';
//             ctx.strokeStyle = neonColor;
//             ctx.lineWidth = 5;
//             ctx.shadowBlur = 30;
//             ctx.shadowColor = neonColor;

//             ctx.beginPath();
//             for (let i = 0; i < 6; i++) {
//                 ctx.lineTo(
//                     x + size * Math.cos(rotation + i * Math.PI / 3),
//                     y + size * Math.sin(rotation + i * Math.PI / 3)
//                 );
//             }
//             ctx.closePath();
//             ctx.stroke();
//         };

//         // Animate the art
//         let rotation = 0;
//         const animate = () => {
//             ctx.clearRect(0, 0, canvas.width, canvas.height);

//             // Draw neon grid
//             createNeonGrid();

//             // Draw rotating hexagons
//             drawNeonHexagon(400, 400, 200, rotation);
//             drawNeonHexagon(400, 400, 150, -rotation);
//             drawNeonHexagon(400, 400, 100, rotation);

//             rotation += 0.01;
//             requestAnimationFrame(animate);
//         };

//         animate();
