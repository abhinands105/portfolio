uniform float uTime;

varying vec3 vColor;

void main()
{
    vColor = color;

    vec3 pos = position;

    // Gentle breathing wave
    pos.z +=
        sin(
            uTime * 1.5 +
            position.x * 7.0 +
            position.y * 7.0
        ) * 0.025;

    // Vertical floating motion
    pos.y +=
        sin(
            uTime * 0.8 +
            position.x * 4.0
        ) * 0.012;

    // Horizontal floating motion
    pos.x +=
        cos(
            uTime * 0.7 +
            position.y * 4.0
        ) * 0.012;

    vec4 mvPosition =
        modelViewMatrix *
        vec4(pos, 1.0);

    // Perspective point size
    gl_PointSize =
        5.0 *
        (300.0 / -mvPosition.z);

    gl_Position =
        projectionMatrix *
        mvPosition;
}