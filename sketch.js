let exampleShader;

const numCircles = 100;

function preload() {
  // load in the shader
  exampleShader = loadShader("example.vert", "example.frag");
}

function setup() {
  createCanvas(600, 600, WEBGL);
  shader(exampleShader);
  noStroke();

  const circles = [];

  for (let i = 0; i < numCircles; i++) {
    circles.push(random(), random(), random(0.05, 0.01));
  }

  exampleShader.setUniform("circles", circles);
}

function draw() {
  exampleShader.setUniform("millis", millis());
  // Run shader
  rect(-width / 2, -height / 2, width);
}
