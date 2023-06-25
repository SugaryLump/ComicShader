#version 460

// input
in vec4 posVar;

// output
out float depth;
layout (location = 0) out vec4 posMap;

void main() {
    posMap = posVar;
    depth = gl_FragDepth;
}