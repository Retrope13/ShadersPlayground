vec3 palette (float t) {
    vec3 a =vec3(.5, .5, .5);
    vec3 b =vec3(.5, .5, .5);
    vec3 c =vec3(1.0, 1.0, 1.0);
    vec3 d =vec3(1, .6, .4);
    return a + b * cos(5. * (c*t+d));
}

void mainImage( out vec4 fragColor, in vec2 fragCoord ) { 
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;
    vec2 uv0 = uv;
    vec3 finalColor = vec3(0.0);

    for (float i = 0.0; i < 5.; i++) {

        uv = fract(uv * 1.5) - .5;

        float d = length(uv) * exp(-length(uv0));

        vec3 col = palette(length(uv0) + i*.4 + iTime*.4);

        d = sin(d * 8. + iTime) / 8.;
        d = abs(d);

        d = pow(.006 / d, 1.3);

        finalColor += col *= d;

    }


    fragColor = vec4(finalColor, 1); 
}
