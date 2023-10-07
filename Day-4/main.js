const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let totalParticleNumber = 50;

class Particle {
  constructor() {
    this.x = Math.random() * (400 - 0) + 0;
    this.y = Math.random() * (400 - 0) + 0;
    this.r = 20;
  }

  draw() {
    c.beginPath();
    c.fillStyle = "blue";
    c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    c.fill();
  }

  move() {
    this.x += Math.random() * (1 - -1) + -1;
    this.y += Math.random() * (1 - -1) + -1;
  }
}

const particleArr = [];
for (let i = 0; i < totalParticleNumber; i++) {
  const obj = new Particle();
  particleArr.push(obj);
}
console.log(particleArr);

// game loop
function animate() {
  c.clearRect(0, 0, 400, 400);

  for (let i = 0; i < totalParticleNumber; i++) {
    particleArr[i].draw();
    particleArr[i].move();
  }

  requestAnimationFrame(animate);
}

animate();









// const canvas=document.getElementById('canvas');
// const c=canvas.getContext("2d");
// let x=Math.random()*(400-0)+0;
// let y=Math.random()*(400-0)+0;
// let r=Math.random()*(100-10)+10;

// const randomNumber=Math.random()*(max-min)+min;//0-1

// //game loop
// function animate(){

//     c.clearRect(0,0,400,400);

//     c.beginPath();
//     c.arc(x,y,r,0, Math.PI*2);
//     c.fill();

//     x+=Math.random()*(1- -1)+ -1;
//     y+=Math.random()*(1- -1)+ -1;

//     window.requestAnimationFrame(animate);
// }

// animate();
