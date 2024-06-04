precision mediump float;

varying vec2 pos;

const int num_circles = 100;
uniform vec3 circles[num_circles];

void main() {
  
  // Single circle SDF
  
  // Multi circle SDF
  float colour = 1.;
  for(int i = 0; i < num_circles; i ++) {
    float d = length(pos - circles[i].xy) - circles[i].z;
    d = step(0., d);
    colour *= d;
  }

  gl_FragColor = vec4(colour, colour, colour, 1.);
}