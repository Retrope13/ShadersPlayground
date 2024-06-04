let exampleShader;

// load in the shader
function preload() {
  exampleShader = loadShader("example.vert", "example.frag");
}

function setup() {
  createCanvas(600, 600, WEBGL);

  // tell p5 to use the shader
  shader(exampleShader);

  noStroke();
}

function draw() {
  clear();
  exampleShader.setUniform("millis", millis());
  // run shader
  // rect(0, 0, width, height);
  ellipse(0, 0, width, height, 150);
}
