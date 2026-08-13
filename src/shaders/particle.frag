varying vec3 vColor;

void main()
{
    vec2 uv = gl_PointCoord - vec2(0.5);

    float dist = length(uv);

    if(dist > 0.5)
        discard;

    // Soft circular particle
    float alpha =
        1.0 - smoothstep(
            0.0,
            0.5,
            dist
        );

    alpha = pow(alpha, 2.5);

    vec3 color = vColor;

    // Purple holographic glow
    color += vec3(
        0.22,
        0.12,
        0.35
    ) * alpha;

    // Bright particle core
    color += vec3(0.12) * alpha;

    gl_FragColor =
        vec4(
            color,
            alpha * 0.95
        );
}