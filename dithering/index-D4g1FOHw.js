import{b as ct,s as ht,h as ut}from"./index-D5s-AdpN.js";const Z=32,ft=16,mt="fontAtlasGL2_",dt=10080*60*1e3;function pt(r){let t=0;for(let o=0;o<r.length;o++){const e=r.charCodeAt(o);t=(t<<5)-t+e,t=t&t}return Math.abs(t).toString(36)}function gt(r,t){return`${mt}${pt(r)}_${t}`}async function H(r,t=1){const o=gt(r,t);try{const c=await ct(o);if(c&&Date.now()-c.timestamp<dt){const T=new OffscreenCanvas(c.width,c.height),v=T.getContext("2d"),p=new ImageData(new Uint8ClampedArray(c.imageData),c.width,c.height);return v.putImageData(p,0,0),{canvas:T,imageData:p,charWidth:c.charWidth,charHeight:c.charHeight,cols:c.cols,rows:c.rows,charset:c.charset,scale:c.scale,width:c.width,height:c.height}}}catch{}const e=Math.max(Z,Math.ceil(Z*Math.max(1,t/4))),i=Math.ceil(e*.6),s=e,a=ft,h=Math.ceil(r.length/a),f=a*i,u=h*s,l=new OffscreenCanvas(f,u),n=l.getContext("2d");n.fillStyle="#000000",n.fillRect(0,0,f,u),n.fillStyle="#FFFFFF",n.font=`bold ${e}px "JetBrains Mono", "SF Mono", "Fira Code", "Courier New", monospace`,n.textBaseline="top";for(let c=0;c<r.length;c++){const T=c%a,v=Math.floor(c/a),p=T*i,g=v*s;n.fillText(r[c],p,g)}const m=n.getImageData(0,0,f,u);return ht(o,{imageData:m.data,width:f,height:u,charWidth:i,charHeight:s,cols:a,rows:h,charset:r,scale:t,timestamp:Date.now()}).catch(()=>{}),{canvas:l,imageData:m,charWidth:i,charHeight:s,cols:a,rows:h,charset:r,scale:t,width:f,height:u}}function tt(r,t,o){const e=r.createShader(o);if(!e)return{success:!1,error:"Failed to create shader"};if(r.shaderSource(e,t),r.compileShader(e),!r.getShaderParameter(e,r.COMPILE_STATUS)){const i=r.getShaderInfoLog(e)||"Unknown shader compilation error";return r.deleteShader(e),{success:!1,error:i}}return{success:!0,shader:e}}function xt(r,t,o){const e=r.createProgram();if(!e)return{success:!1,error:"Failed to create program"};if(r.attachShader(e,t),r.attachShader(e,o),r.linkProgram(e),!r.getProgramParameter(e,r.LINK_STATUS)){const i=r.getProgramInfoLog(e)||"Unknown program link error";return r.deleteProgram(e),{success:!1,error:i}}return{success:!0,program:e}}function _(r,t,o,e="unnamed"){const i=tt(r,t,r.VERTEX_SHADER);if(!i.success||!i.shader)return console.error(`[${e}] Vertex shader compilation failed:`,i.error),null;const s=tt(r,o,r.FRAGMENT_SHADER);if(!s.success||!s.shader)return console.error(`[${e}] Fragment shader compilation failed:`,s.error),r.deleteShader(i.shader),null;const a=xt(r,i.shader,s.shader);return r.deleteShader(i.shader),r.deleteShader(s.shader),!a.success||!a.program?(console.error(`[${e}] Program linking failed:`,a.error),null):a.program}function y(r,t){const o=new Map,e=r.getProgramParameter(t,r.ACTIVE_UNIFORMS);for(let i=0;i<e;i++){const s=r.getActiveUniform(t,i);if(s){const a=r.getUniformLocation(t,s.name);a&&o.set(s.name,a)}}return o}const et={internalFormat:WebGL2RenderingContext.RGBA8,format:WebGL2RenderingContext.RGBA,type:WebGL2RenderingContext.UNSIGNED_BYTE,minFilter:WebGL2RenderingContext.LINEAR,magFilter:WebGL2RenderingContext.LINEAR,wrapS:WebGL2RenderingContext.CLAMP_TO_EDGE,wrapT:WebGL2RenderingContext.CLAMP_TO_EDGE,generateMipmap:!1};function W(r,t,o,e={}){const i={...et,...e},s=r.createTexture();return s?(r.bindTexture(r.TEXTURE_2D,s),r.texImage2D(r.TEXTURE_2D,0,i.internalFormat,t,o,0,i.format,i.type,null),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,i.minFilter),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,i.magFilter),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,i.wrapS),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,i.wrapT),i.generateMipmap&&r.generateMipmap(r.TEXTURE_2D),r.bindTexture(r.TEXTURE_2D,null),{texture:s,width:t,height:o,internalFormat:i.internalFormat,format:i.format,type:i.type}):(console.error("Failed to create texture"),null)}function D(r,t,o={}){const e={...et,...o},i=r.createTexture();if(!i)return console.error("Failed to create texture from source"),null;const s=t instanceof HTMLVideoElement?t.videoWidth:t.width,a=t instanceof HTMLVideoElement?t.videoHeight:t.height;return r.bindTexture(r.TEXTURE_2D,i),r.texImage2D(r.TEXTURE_2D,0,e.internalFormat,e.format,e.type,t),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,e.minFilter),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,e.magFilter),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,e.wrapS),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,e.wrapT),e.generateMipmap&&r.generateMipmap(r.TEXTURE_2D),r.bindTexture(r.TEXTURE_2D,null),{texture:i,width:s,height:a,internalFormat:e.internalFormat,format:e.format,type:e.type}}function Tt(r,t,o){const e=o instanceof HTMLVideoElement?o.videoWidth:o.width,i=o instanceof HTMLVideoElement?o.videoHeight:o.height;r.bindTexture(r.TEXTURE_2D,t.texture),e!==t.width||i!==t.height?(r.texImage2D(r.TEXTURE_2D,0,t.internalFormat,t.format,t.type,o),t.width=e,t.height=i):r.texSubImage2D(r.TEXTURE_2D,0,0,0,t.format,t.type,o),r.bindTexture(r.TEXTURE_2D,null)}function q(r,t,o,e){t.width===o&&t.height===e||(r.bindTexture(r.TEXTURE_2D,t.texture),r.texImage2D(r.TEXTURE_2D,0,t.internalFormat,o,e,0,t.format,t.type,null),t.width=o,t.height=e,r.bindTexture(r.TEXTURE_2D,null))}function U(r,t,o){r.activeTexture(r.TEXTURE0+o),r.bindTexture(r.TEXTURE_2D,t)}function R(r,t){r.deleteTexture(t.texture)}function k(r,t){const o=r.createFramebuffer();if(!o)return console.error("Failed to create framebuffer"),null;r.bindFramebuffer(r.FRAMEBUFFER,o),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,t.texture,0);const e=r.checkFramebufferStatus(r.FRAMEBUFFER);return e!==r.FRAMEBUFFER_COMPLETE?(console.error("Framebuffer incomplete:",vt(r,e)),r.deleteFramebuffer(o),r.bindFramebuffer(r.FRAMEBUFFER,null),null):(r.bindFramebuffer(r.FRAMEBUFFER,null),{framebuffer:o,colorTexture:t,width:t.width,height:t.height})}function O(r,t){t?(r.bindFramebuffer(r.FRAMEBUFFER,t.framebuffer),r.viewport(0,0,t.width,t.height)):r.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(r,t,o){r.bindFramebuffer(r.FRAMEBUFFER,null),r.viewport(0,0,t,o)}function K(r,t){r.deleteFramebuffer(t.framebuffer)}function vt(r,t){switch(t){case r.FRAMEBUFFER_COMPLETE:return"FRAMEBUFFER_COMPLETE";case r.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:return"FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT";case r.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:return"FRAMEBUFFER_INCOMPLETE_DIMENSIONS";case r.FRAMEBUFFER_UNSUPPORTED:return"FRAMEBUFFER_UNSUPPORTED";case r.FRAMEBUFFER_INCOMPLETE_MULTISAMPLE:return"FRAMEBUFFER_INCOMPLETE_MULTISAMPLE";default:return`Unknown status: ${t}`}}const I=`#version 300 es
precision highp float;

out vec2 texCoord;

void main() {
  // Generate full-screen triangle using vertex ID
  // Vertices: (-1,-1), (3,-1), (-1,3)
  // This creates a triangle that covers the entire [-1,1] clip space
  vec2 positions[3] = vec2[](
    vec2(-1.0, -1.0),
    vec2(3.0, -1.0),
    vec2(-1.0, 3.0)
  );

  // UV coordinates match DOM/canvas upload orientation.
  // Interpolated values will be [0,1] in the visible viewport.
  vec2 uvs[3] = vec2[](
    vec2(0.0, 0.0),
    vec2(2.0, 0.0),
    vec2(0.0, 2.0)
  );

  gl_Position = vec4(positions[gl_VertexID], 0.0, 1.0);
  texCoord = uvs[gl_VertexID];
}
`,rt=`
// Constants
const float PI = 3.14159265359;

// Luminance calculation (ITU-R BT.709)
float luminance(vec3 c) {
  return dot(c, vec3(0.299, 0.587, 0.114));
}

// Hash functions for procedural noise
float hash(vec2 p) {
  return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

vec2 hash2(vec2 p) {
  return vec2(
    fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453),
    fract(sin(dot(p, vec2(269.5, 183.3))) * 43758.5453)
  );
}

// RGB to HSV conversion
vec3 rgb2hsv(vec3 c) {
  vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
  vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
  vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));
  float d = q.x - min(q.w, q.y);
  float e = 1.0e-10;
  return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
}

// HSV to RGB conversion
vec3 hsv2rgb(vec3 c) {
  vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
  return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

// Apply brightness and contrast adjustments
vec3 applyBrightnessContrast(vec3 color, float brightness, float contrast) {
  vec3 result = color + vec3(brightness);
  float contrastFactor = (1.0 + contrast) / (1.0 - contrast * 0.99);
  result = (result - 0.5) * contrastFactor + 0.5;
  return clamp(result, vec3(0.0), vec3(1.0));
}

// Apply gamma correction
vec3 applyGamma(vec3 color, float gamma) {
  if (gamma == 1.0) return color;
  float g = 1.0 / max(gamma, 0.01);
  return pow(max(color, vec3(0.001)), vec3(g));
}

// 2D rotation
vec2 rotate2D(vec2 p, float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return vec2(p.x * c - p.y * s, p.x * s + p.y * c);
}

// Interleaved gradient noise (high quality blue noise approximation)
float interleavedGradientNoise(vec2 pos) {
  vec3 magic = vec3(0.06711056, 0.00583715, 52.9829189);
  return fract(magic.z * fract(dot(pos, magic.xy)));
}

// Blue noise approximation using multiple octaves
float blueNoiseApprox(vec2 pos) {
  float n1 = interleavedGradientNoise(pos);
  float n2 = interleavedGradientNoise(pos * 1.5 + vec2(17.0, 31.0));
  float n3 = interleavedGradientNoise(pos * 2.3 + vec2(53.0, 97.0));
  return fract(n1 + n2 * 0.5 + n3 * 0.25);
}
`,bt=I,Et=`#version 300 es
precision highp float;

uniform sampler2D inputTexture;
uniform float effectType;
uniform float brightness;
uniform float contrast;
uniform float intensity;
uniform float time;
uniform vec2 resolution;
uniform float paramA;
uniform float paramB;
uniform float paramC;
uniform float paramD;
uniform float paramE;
uniform float paramF;
uniform float paramG;
uniform float paramH;
uniform float modeA;
uniform float modeB;
uniform vec3 colorA;
uniform vec3 colorB;

in vec2 texCoord;
out vec4 fragColor;

float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
vec2 hash2(vec2 p) { return vec2(hash(p), hash(p + 19.19)); }
vec3 bc(vec3 c) {
  c += brightness / 200.0;
  float f = (contrast + 100.0) / 100.0;
  return clamp((c - 0.5) * f + 0.5, 0.0, 1.0);
}
vec3 customMix(vec3 original, float mask) {
  return modeA > 0.5 ? mix(colorB, colorA, clamp(mask, 0.0, 1.0)) : original;
}
vec3 quantize(vec3 c, float levels) {
  float l = max(2.0, levels);
  return floor(c * l) / max(1.0, l - 1.0);
}
float stripe(vec2 p, float angle, float density, float width) {
  float a = radians(angle);
  vec2 r = vec2(cos(a), sin(a));
  float v = fract(dot(p, r) * density);
  return 1.0 - smoothstep(width, width + 0.015, abs(v - 0.5));
}

void main() {
  vec2 uv = clamp(vec2(texCoord.x, 1.0 - texCoord.y), vec2(0.0), vec2(1.0));
  vec2 px = 1.0 / max(resolution, vec2(1.0));
  vec4 src = texture(inputTexture, uv);
  vec3 color = src.rgb;
  float l = lum(color);
  float e = floor(effectType + 0.5);
  float amt = max(intensity, 0.001);

  if (e == 1.0) {
    float lines = max(2.0, paramA);
    float amp = paramB / max(resolution.y, 1.0);
    float freq = max(0.05, paramC);
    float thick = clamp(paramD, 0.05, 2.0);
    vec2 wuv = uv;
    float wave = sin((modeB < 0.5 ? uv.x : uv.y) * 18.0 * freq + time * modeA);
    wuv += modeB < 0.5 ? vec2(0.0, wave * amp) : vec2(wave * amp, 0.0);
    float coord = modeB < 0.5 ? wuv.y : wuv.x;
    float line = 1.0 - smoothstep(0.48 * thick, 0.52 * thick, abs(fract(coord * lines) - 0.5));
    color = texture(inputTexture, clamp(wuv, vec2(0.0), vec2(1.0))).rgb * mix(0.35, 1.25, line);
  } else if (e == 2.0) {
    float levels = max(2.0, paramB);
    vec2 p = floor(gl_FragCoord.xy);
    float n = hash(floor(p / max(1.0, paramC)));
    float threshold = n;
    if (paramD < 0.5) {
      threshold = mod(p.x + p.y * 2.0, 4.0) / 4.0;
    } else if (paramD < 1.5) {
      threshold = mod(p.x * 3.0 + p.y * 5.0, 8.0) / 8.0;
    } else if (paramD < 2.5) {
      threshold = hash(floor(p / 2.0)) * 0.6 + mod(p.x + p.y, 2.0) * 0.2;
    } else if (paramD < 3.5) {
      threshold = fract(sin(dot(p, vec2(0.754877, 0.569840))) * 52.9829);
    } else if (paramD < 4.5) {
      threshold = 0.5 + 0.35 * sin((p.x + p.y) * 0.8);
    } else if (paramD < 5.5) {
      threshold = hash(p + floor(time * 12.0));
    }
    float q = floor((l + (threshold - 0.5) * 0.35 * paramA) * levels) / max(1.0, levels - 1.0);
    vec3 d = modeA > 0.5 ? vec3(q) : quantize(color + (threshold - 0.5) * 0.18 * paramA, levels);
    color = mix(color, d, clamp(paramA, 0.0, 1.5));
  } else if (e == 3.0 || e == 5.0) {
    float cell = max(2.0, paramB) * (e == 3.0 ? 1.0 : max(0.5, paramC));
    float angle = radians(paramD);
    mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
    vec2 gp = (rot * gl_FragCoord.xy) / cell;
    vec2 gv = fract(gp) - 0.5;
    if (modeB > 0.5) gv.x *= 0.75;
    float radius = (e == 3.0 ? paramA : paramA * 0.42) * (modeA > 1.5 ? sqrt(l) : 1.0 - l * 0.45);
    float dotMask = smoothstep(radius, radius - 0.08, length(gv));
    color = customMix(color * dotMask, dotMask);
  } else if (e == 4.0) {
    float row = floor(uv.y * resolution.y / max(1.0, paramA));
    float gate = step(paramB, modeB > 0.5 ? 1.0 - l : l);
    float rnd = hash(vec2(row, floor(time * 8.0))) - 0.5;
    float dir = modeA > 0.5 ? -1.0 : 1.0;
    float shift = dir * gate * (paramC / max(resolution.x, 1.0)) * (0.35 + rnd * paramD);
    color = texture(inputTexture, vec2(clamp(uv.x + shift * amt, 0.0, 1.0), uv.y)).rgb;
  } else if (e == 6.0) {
    float bands = max(2.0, paramA);
    float q = floor(l * bands) / bands;
    float edge = smoothstep(paramB / bands, 0.0, abs(fract(l * bands) - 0.5));
    vec3 filled = modeB > 0.5 ? vec3(q) : color * (0.55 + q * 0.65);
    color = mix(filled, customMix(vec3(0.0), 1.0), edge);
    if (modeA > 0.5) color = 1.0 - color;
  } else if (e == 7.0) {
    float spread = max(1.0, paramB);
    float l1 = lum(texture(inputTexture, uv + vec2(px.x * spread, 0.0)).rgb);
    float l2 = lum(texture(inputTexture, uv - vec2(px.x * spread, 0.0)).rgb);
    float l3 = lum(texture(inputTexture, uv + vec2(0.0, px.y * spread)).rgb);
    float l4 = lum(texture(inputTexture, uv - vec2(0.0, px.y * spread)).rgb);
    float edge = abs(l1 - l2) + abs(l3 - l4);
    if (modeB > 0.5) edge += abs(l1 + l2 + l3 + l4 - 4.0 * l) * 0.5;
    float mask = smoothstep(paramA, paramA + 0.2, edge * amt);
    color = customMix(vec3(mask), modeA > 0.5 ? 1.0 - mask : mask);
  } else if (e == 8.0) {
    float darkness = modeA > 0.5 ? l : 1.0 - l;
    float hatch = 1.0;
    hatch = min(hatch, mix(1.0, stripe(uv, paramC, paramA, paramD), smoothstep(0.15, 0.45, darkness)));
    if (paramB > 1.5) hatch = min(hatch, mix(1.0, stripe(uv, paramC + 45.0, paramA, paramD), smoothstep(0.35, 0.65, darkness)));
    if (paramB > 2.5) hatch = min(hatch, mix(1.0, stripe(uv, paramC + 90.0, paramA, paramD), smoothstep(0.55, 0.85, darkness)));
    hatch = mix(hatch, hash(gl_FragCoord.xy) < paramE ? 1.0 - hatch : hatch, paramE);
    color = mix(color, customMix(vec3(hatch), hatch), 0.9);
  } else if (e == 9.0) {
    float blocks = max(2.0, resolution.x / max(1.0, paramA));
    vec2 buv = floor(uv * blocks) / blocks + 0.5 / blocks;
    color = texture(inputTexture, clamp(buv, vec2(0.0), vec2(1.0))).rgb;
    if (modeA > 0.5) color = vec3(lum(color));
    float border = step(fract(uv.x * blocks), paramB / max(paramA, 1.0)) + step(fract(uv.y * blocks), paramB / max(paramA, 1.0));
    if (border > 0.0) color = mix(color, colorA, clamp(border, 0.0, 1.0));
  } else if (e == 10.0) {
    float levels = max(2.0, paramA);
    float n = modeB > 0.5 ? (hash(gl_FragCoord.xy) - 0.5) / levels : 0.0;
    float q = floor(clamp((l + n - paramB + 0.5) * levels, 0.0, levels - 0.001)) / (levels - 1.0);
    if (modeA > 0.5) q = 1.0 - q;
    color = customMix(vec3(q), q);
  } else if (e == 11.0) {
    float scale = max(2.0, paramA);
    float n = 0.0;
    float amp = 0.5;
    for (int octave = 0; octave < 8; octave++) {
      if (float(octave) >= paramC) break;
      n += hash(floor(uv * scale * pow(2.0, float(octave))) + floor(time * paramD)) * amp;
      amp *= 0.5;
    }
    vec2 duv = uv + (hash2(uv * 91.0 + n) - 0.5) * 0.06 * paramB;
    vec3 distorted = texture(inputTexture, clamp(duv, vec2(0.0), vec2(1.0))).rgb;
    color = modeA > 0.5 ? distorted : mix(distorted, vec3(n), 0.28 * paramB);
  } else if (e == 12.0) {
    float cell = max(3.0, paramA);
    vec2 grid = floor(gl_FragCoord.xy / cell);
    float trail = max(1.0, paramD);
    float speed = paramC;
    float head = hash(vec2(grid.x, floor(time * speed))) * resolution.y / cell;
    float dist = modeB < 1.5 ? grid.y - mod(head + time * speed * 12.0, resolution.y / cell) : grid.x - mod(head + time * speed * 12.0, resolution.x / cell);
    float rain = smoothstep(trail, 0.0, abs(dist));
    rain *= step(paramH, hash(grid + floor(time * speed)));
    color = mix(color * (1.0 - paramE), colorA * (0.4 + paramF), rain);
  } else if (e == 13.0) {
    float scan = mix(1.0, 0.82 + 0.18 * sin(uv.y * resolution.y * 3.14159), paramD);
    float jitter = (hash(vec2(floor(uv.y * 120.0), floor(time * 20.0))) - 0.5) * 0.03 * paramA;
    float bleed = paramC * 0.008;
    float noise = (hash(gl_FragCoord.xy + floor(time * 60.0)) - 0.5) * paramB;
    color.r = texture(inputTexture, vec2(clamp(uv.x + jitter + bleed, 0.0, 1.0), uv.y)).r;
    color.g = texture(inputTexture, vec2(clamp(uv.x + jitter, 0.0, 1.0), uv.y)).g;
    color.b = texture(inputTexture, vec2(clamp(uv.x + jitter - bleed, 0.0, 1.0), uv.y)).b;
    color = color * scan + noise + vec3(paramE * hash(vec2(floor(time * 6.0), floor(uv.y * 12.0))) * 0.12);
  } else if (e == 14.0) {
    float cells = max(3.0, resolution.x / max(5.0, paramA));
    vec2 cell = floor(uv * cells);
    vec2 f = fract(uv * cells);
    float d = 1.0;
    vec2 closest = vec2(0.0);
    for (int y = -1; y <= 1; y++) {
      for (int x = -1; x <= 1; x++) {
        vec2 n = vec2(float(x), float(y));
        vec2 p = mix(vec2(0.5), hash2(cell + n), paramD);
        float nd = length(n + p - f);
        if (nd < d) { d = nd; closest = cell + n + p; }
      }
    }
    vec3 sampleColor = texture(inputTexture, clamp(closest / cells, vec2(0.0), vec2(1.0))).rgb;
    color = mix(color, modeA > 0.5 ? sampleColor : mix(color, sampleColor, 0.7), 0.85);
    float edge = smoothstep(paramB, paramB + 0.025, d);
    vec3 edgeColor = modeB < 0.5 ? vec3(0.0) : modeB < 1.5 ? vec3(1.0) : color * 0.5;
    color = mix(edgeColor, color, edge);
  }

  fragColor = vec4(bc(color), src.a);
}`,Rt=I,Ct=`#version 300 es
precision highp float;

// Textures
uniform sampler2D sourceTexture;
uniform sampler2D fontAtlas;
uniform sampler2D matchResultTexture;  // Character indices encoded as R channel

// Uniforms matching WebGPU AsciiUniforms structure
uniform vec2 sourceSize;
uniform vec2 outputSize;
uniform vec2 cellSize;
uniform vec2 atlasSize;
uniform vec2 atlasCharSize;
uniform float atlasCols;
uniform float charsetLength;
uniform float brightness;
uniform float contrast;
uniform float invert;
uniform float useOriginalColors;
uniform vec3 customColor;
uniform float spacing;
uniform float saturation;
uniform float hue;
uniform float sharpness;
uniform float gamma;
uniform float imageColorMode;
uniform float gridCols;
uniform vec3 backgroundColor;
uniform float brightnessMapping;
uniform float edgeEnhance;
uniform float blur;
uniform float quantizeColors;

in vec2 texCoord;
out vec4 fragColor;

${rt}

// RGB to HSL conversion
vec3 rgbToHsl(vec3 c) {
  float maxC = max(max(c.r, c.g), c.b);
  float minC = min(min(c.r, c.g), c.b);
  float l = (maxC + minC) * 0.5;

  if (maxC == minC) {
    return vec3(0.0, 0.0, l);
  }

  float d = maxC - minC;
  float s = l > 0.5 ? d / (2.0 - maxC - minC) : d / (maxC + minC);

  float h;
  if (maxC == c.r) {
    h = (c.g - c.b) / d + (c.g < c.b ? 6.0 : 0.0);
  } else if (maxC == c.g) {
    h = (c.b - c.r) / d + 2.0;
  } else {
    h = (c.r - c.g) / d + 4.0;
  }
  h /= 6.0;

  return vec3(h, s, l);
}

// Hue to RGB helper
float hueToRgb(float p, float q, float t) {
  float tNorm = t - floor(t);  // Wrap to [0, 1]
  if (tNorm < 1.0/6.0) return p + (q - p) * 6.0 * tNorm;
  if (tNorm < 0.5) return q;
  if (tNorm < 2.0/3.0) return p + (q - p) * (2.0/3.0 - tNorm) * 6.0;
  return p;
}

// HSL to RGB conversion
vec3 hslToRgb(vec3 hsl) {
  if (hsl.y == 0.0) {
    return vec3(hsl.z);
  }

  float q = hsl.z < 0.5 ? hsl.z * (1.0 + hsl.y) : hsl.z + hsl.y - hsl.z * hsl.y;
  float p = 2.0 * hsl.z - q;

  return vec3(
    hueToRgb(p, q, hsl.x + 1.0/3.0),
    hueToRgb(p, q, hsl.x),
    hueToRgb(p, q, hsl.x - 1.0/3.0)
  );
}

// Apply image processing
vec3 applyImageProcessing(vec3 color, float invGamma, float brightnessOffset, float contrastFactor, float satFactor, int colorMode) {
  vec3 c = color;

  // Apply gamma correction
  c = pow(c, vec3(invGamma));

  // Apply brightness adjustment
  c = c + brightnessOffset;

  // Apply contrast adjustment
  c = (c - 0.5) * contrastFactor + 0.5;

  // Apply saturation
  float gray = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(vec3(gray), c, satFactor);

  // Apply hue rotation only if needed
  if (hue > 0.0) {
    vec3 hsl = rgbToHsl(c);
    float newHue = fract(hsl.x + hue / 360.0);
    c = hslToRgb(vec3(newHue, hsl.y, hsl.z));
  }

  // Apply color mode transformations
  if (colorMode == 1) {
    // Grayscale
    float grayVal = dot(c, vec3(0.299, 0.587, 0.114));
    c = vec3(grayVal);
  } else if (colorMode == 2) {
    // Monochrome (high contrast black/white)
    float grayVal = dot(c, vec3(0.299, 0.587, 0.114));
    c = grayVal > 0.5 ? vec3(1.0) : vec3(0.0);
  } else if (colorMode == 3) {
    // Sepia
    float grayVal = dot(c, vec3(0.299, 0.587, 0.114));
    c = vec3(grayVal * 1.2, grayVal, grayVal * 0.8);
  }

  return clamp(c, vec3(0.0), vec3(1.0));
}

void main() {
  // Precompute frequently used values
  vec2 invCellSize = 1.0 / cellSize;
  vec2 invOutputSize = 1.0 / outputSize;
  vec2 invAtlasSize = 1.0 / atlasSize;
  vec2 texelSize = 1.0 / sourceSize;

  // Precompute image processing parameters
  float invGamma = 1.0 / gamma;
  float brightnessOffset = brightness * 0.005;  // /200
  float contrastFactor = (contrast + 100.0) * 0.01;  // /100
  float satFactor = (saturation + 100.0) * 0.01;  // /100
  int colorMode = int(imageColorMode + 0.5);

  // Current pixel position in output
  vec2 pixelPos = texCoord * outputSize;

  // Which ASCII cell are we in?
  vec2 cellPos = floor(pixelPos * invCellSize);

  // Position within the cell (0-1)
  vec2 cellUV = fract(pixelPos * invCellSize);

  // Apply spacing - shrink the character area and add gaps
  float gapRatio = spacing * 0.5;
  float charArea = 1.0 - gapRatio;
  float halfGap = gapRatio * 0.5;

  // Check if in gap
  bool inGapX = cellUV.x < halfGap || cellUV.x > (1.0 - halfGap);
  bool inGapY = cellUV.y < halfGap || cellUV.y > (1.0 - halfGap);
  bool inGap = inGapX || inGapY;

  // Remap cellUV to the character area
  float invCharArea = 1.0 / charArea;
  vec2 remappedUV = (cellUV - halfGap) * invCharArea;
  vec2 clampedCellUV = clamp(remappedUV, vec2(0.0), vec2(1.0));

  // Calculate number of cells
  vec2 numCells = floor(outputSize * invCellSize);
  vec2 invNumCells = 1.0 / numCells;

  // Sample the source image - map cell position directly to source UV
  vec2 sourceUV = (cellPos + 0.5) * invNumCells;
  sourceUV.y = 1.0 - sourceUV.y;
  vec2 clampedSourceUV = clamp(sourceUV, vec2(0.0), vec2(1.0));

  vec4 sourceColor = texture(sourceTexture, clampedSourceUV);

  // Apply blur (box blur) - only if enabled
  if (blur > 0.0) {
    float blurRadius = blur;
    vec3 blurredColor = vec3(0.0);
    for (int dy = -2; dy <= 2; dy++) {
      for (int dx = -2; dx <= 2; dx++) {
        vec2 offset = vec2(float(dx), float(dy)) * texelSize * blurRadius;
        blurredColor += texture(sourceTexture, clampedSourceUV + offset).rgb;
      }
    }
    sourceColor = vec4(blurredColor / 25.0, sourceColor.a);
  }

  // Apply edge enhancement (Laplacian-based) - only if enabled
  if (edgeEnhance > 0.0) {
    vec3 center = sourceColor.rgb;
    vec3 left = texture(sourceTexture, clampedSourceUV + vec2(-texelSize.x, 0.0)).rgb;
    vec3 right = texture(sourceTexture, clampedSourceUV + vec2(texelSize.x, 0.0)).rgb;
    vec3 top = texture(sourceTexture, clampedSourceUV + vec2(0.0, -texelSize.y)).rgb;
    vec3 bottom = texture(sourceTexture, clampedSourceUV + vec2(0.0, texelSize.y)).rgb;
    vec3 laplacian = center * 4.0 - left - right - top - bottom;
    float edgeAmount = edgeEnhance * 0.01;
    sourceColor = vec4(center + laplacian * edgeAmount, sourceColor.a);
  }

  // Apply sharpness (unsharp mask) - only if enabled
  if (sharpness > 0.0) {
    vec3 blurSample = (
      texture(sourceTexture, clampedSourceUV + vec2(-texelSize.x, 0.0)).rgb +
      texture(sourceTexture, clampedSourceUV + vec2(texelSize.x, 0.0)).rgb +
      texture(sourceTexture, clampedSourceUV + vec2(0.0, -texelSize.y)).rgb +
      texture(sourceTexture, clampedSourceUV + vec2(0.0, texelSize.y)).rgb
    ) * 0.25;
    float sharpAmount = sharpness * 0.01;
    sourceColor = vec4(sourceColor.rgb + (sourceColor.rgb - blurSample) * sharpAmount, sourceColor.a);
  }

  // Apply color quantization (posterization) - only if enabled
  vec3 processedRgb = sourceColor.rgb;
  if (quantizeColors > 1.0) {
    float levels = quantizeColors;
    float invLevelsMinus1 = 1.0 / (levels - 1.0);
    processedRgb = floor(processedRgb * levels) * invLevelsMinus1;
  }

  // Apply image processing with precomputed parameters
  vec3 processedColor = applyImageProcessing(processedRgb, invGamma, brightnessOffset, contrastFactor, satFactor, colorMode);

  // Get character index from match result texture
  // The match result is stored as normalized float (index / charsetLength)
  // We read from a 2D texture where each pixel represents one grid cell
  vec2 matchUV = (cellPos + 0.5) / vec2(gridCols, numCells.y);
  matchUV.y = 1.0 - matchUV.y;
  float encodedIndex = texture(matchResultTexture, matchUV).r;
  uint charIndex = uint(encodedIndex * 255.0 + 0.5);  // Decode from normalized value

  // Calculate atlas UV for this character
  uint atlasColsU = uint(atlasCols);
  float atlasCol = float(charIndex % atlasColsU);
  float atlasRow = float(charIndex / atlasColsU);

  // UV within the character cell in the atlas
  vec2 atlasCharUV = vec2(
    (atlasCol + clampedCellUV.x) * atlasCharSize.x,
    (atlasRow + clampedCellUV.y) * atlasCharSize.y
  ) * invAtlasSize;

  // Sample the font atlas
  vec4 atlasColor = texture(fontAtlas, atlasCharUV);

  // Character intensity (white = character, black = background)
  float charIntensity = (inGap && spacing > 0.01) ? 0.0 : atlasColor.r;

  // Determine final color
  vec3 finalColor = useOriginalColors > 0.5 ? processedColor : customColor;

  // Apply character mask with background color
  vec3 outputColor = mix(backgroundColor, finalColor, charIntensity);

  fragColor = vec4(outputColor, 1.0);
}
`,Ut=I,At=`#version 300 es
precision highp float;

// Uniforms matching WebGPU PostProcessUniforms layout
uniform vec2 resolution;           // offset 0
uniform float time;                // offset 8
uniform uint bloomEnabled;         // offset 12
uniform float bloomIntensity;      // offset 16
uniform float _bloomPad;           // offset 20 (unused)
uniform uint grainEnabled;         // offset 24
uniform float grainIntensity;      // offset 28
uniform float grainSize;           // offset 32
uniform float grainSpeed;          // offset 36
uniform uint chromaticEnabled;     // offset 40
uniform float chromaticOffset;     // offset 44
uniform uint scanlinesEnabled;     // offset 48
uniform float scanlinesOpacity;    // offset 52
uniform float scanlinesSpacing;    // offset 56
uniform uint vignetteEnabled;      // offset 60
uniform float vignetteIntensity;   // offset 64
uniform float vignetteRadius;      // offset 68
uniform uint crtEnabled;           // offset 72
uniform float crtAmount;           // offset 76
uniform uint phosphorEnabled;      // offset 80
uniform float _padding1;           // offset 84
uniform float phosphorColorR;      // offset 88
uniform float phosphorColorG;      // offset 92
uniform float phosphorColorB;      // offset 96
uniform float _padding2;           // offset 100

uniform sampler2D inputTexture;
uniform sampler2D bloomTexture;

in vec2 texCoord;
out vec4 fragColor;

${rt}

// CRT barrel distortion
vec2 crtDistort(vec2 uv, float amount) {
  vec2 centered = uv - 0.5;
  float dist = dot(centered, centered);
  vec2 distorted = centered * (1.0 + dist * amount);
  return distorted + 0.5;
}

void main() {
  vec2 pixelSize = 1.0 / resolution;

  // Apply CRT barrel distortion first (affects UV coordinates)
  bool crtActive = crtEnabled == 1u && crtAmount > 0.0;
  vec2 distortedUV = crtDistort(texCoord, crtAmount);
  vec2 uv = crtActive ? distortedUV : texCoord;

  // Check if UV is out of bounds (for CRT corners)
  bool outOfBounds = crtActive && (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0);

  vec4 color = texture(inputTexture, clamp(uv, vec2(0.0), vec2(1.0)));

  // Chromatic aberration
  if (chromaticEnabled == 1u && chromaticOffset > 0.0) {
    float offset = chromaticOffset * pixelSize.x;
    float rShift = texture(inputTexture, vec2(uv.x - offset, uv.y)).r;
    float bShift = texture(inputTexture, vec2(uv.x + offset, uv.y)).b;
    color.r = rShift;
    color.b = bShift;
  }

  // Bloom effect (multi-pass bloom blended from separate texture)
  if (bloomEnabled == 1u) {
    vec4 bloom = texture(bloomTexture, uv);
    color.rgb = color.rgb + bloom.rgb * bloomIntensity;
  }

  // Scanlines
  if (scanlinesEnabled == 1u) {
    float fragY = uv.y * resolution.y;
    float scanline = mod(fragY, scanlinesSpacing * 2.0);
    if (scanline < scanlinesSpacing) {
      color.rgb *= (1.0 - scanlinesOpacity);
    }
  }

  // Film grain
  if (grainEnabled == 1u) {
    vec2 grainUV = floor(uv * resolution / max(grainSize, 1.0)) * max(grainSize, 1.0);
    float noise = hash(grainUV + time * grainSpeed) - 0.5;
    float grainAmount = noise * (grainIntensity / 100.0);
    color.rgb += grainAmount;
  }

  // Phosphor color tint (terminal color effect)
  if (phosphorEnabled == 1u) {
    float lum = luminance(color.rgb);
    vec3 phosphorColor = vec3(phosphorColorR, phosphorColorG, phosphorColorB);
    color.rgb = phosphorColor * lum;
  }

  // Vignette (darken edges)
  if (vignetteEnabled == 1u) {
    vec2 centered = uv - 0.5;
    float dist = length(centered) * 2.0; // 0 at center, ~1.4 at corners
    float vignette = 1.0 - smoothstep(vignetteRadius, 1.0, dist) * vignetteIntensity;
    color.rgb *= vignette;
  }

  // Apply CRT out-of-bounds masking (black corners)
  if (outOfBounds) {
    color = vec4(0.0, 0.0, 0.0, 1.0);
  }

  fragColor = clamp(color, vec4(0.0), vec4(1.0));
}
`,Ft=I,St=`#version 300 es
precision highp float;

uniform sampler2D inputTexture;
uniform float threshold;
uniform float softThreshold;

in vec2 texCoord;
out vec4 fragColor;

void main() {
  vec4 color = texture(inputTexture, texCoord);

  // Calculate luminance (ITU-R BT.709)
  float luminance = dot(color.rgb, vec3(0.2126, 0.7152, 0.0722));

  // Simple soft threshold: smoothstep from threshold to threshold + softThreshold
  float t = threshold;
  float softRange = softThreshold;

  // How much this pixel exceeds the threshold (0 = at threshold, 1 = way above)
  float brightness = smoothstep(t - softRange, t + softRange, luminance);

  // Output the original color scaled by how much it exceeds threshold
  // This preserves color while extracting only bright areas
  fragColor = vec4(color.rgb * brightness, 1.0);
}
`,Pt=I,Mt=`#version 300 es
precision highp float;

uniform sampler2D inputTexture;
uniform vec2 direction;    // (1,0) for horizontal, (0,1) for vertical
uniform vec2 resolution;
uniform float radius;

in vec2 texCoord;
out vec4 fragColor;

// Gaussian weight function
float gaussian(float x, float sigma) {
  return exp(-(x * x) / (2.0 * sigma * sigma));
}

void main() {
  // Pixel size in UV space (0-1)
  vec2 pixelSize = 1.0 / resolution;

  // Direction scaled by pixel size - this gives us one pixel step
  vec2 pixelStep = direction * pixelSize;

  // Sigma for gaussian - radius is in pixels
  float sigma = max(radius * 0.5, 1.0);

  vec4 color = vec4(0.0);
  float totalWeight = 0.0;

  // 13-tap Gaussian blur for quality
  // Sample from -6 to +6 pixel offsets, scaled by radius
  for (int i = -6; i <= 6; i++) {
    // Offset in pixels, spread across the radius
    float pixelOffset = float(i) * (radius / 6.0);

    // Gaussian weight based on distance
    float weight = gaussian(float(i), sigma / (radius / 6.0));

    // Sample position in UV space
    vec2 sampleUV = texCoord + pixelStep * pixelOffset;

    // Clamp to valid UV range
    vec2 clampedUV = clamp(sampleUV, vec2(0.0), vec2(1.0));

    color += texture(inputTexture, clampedUV) * weight;
    totalWeight += weight;
  }

  fragColor = color / totalWeight;
}
`,Bt=.299,_t=.587,yt=.114;class Dt{fontAtlas=null;setFontAtlas(t){this.fontAtlas=t}getFontBrightness(t){if(!this.fontAtlas)return[];const{imageData:o,charWidth:e,charHeight:i,cols:s,charset:a}=this.fontAtlas,h=o.data,f=o.width,u=a.length,l=t*t,n=[];for(let m=0;m<u;m++){const c=m%s,T=Math.floor(m/s),v=c*e,p=T*i,g=new Float32Array(l);for(let d=0;d<t;d++)for(let x=0;x<t;x++){const E=Math.floor(v+(x+.5)/t*e),S=(Math.floor(p+(d+.5)/t*i)*f+E)*4;g[d*t+x]=h[S]/255}n.push(g)}return n}match(t,o,e,i){if(!this.fontAtlas)return null;const{brightnessWeight:s,invert:a,brightnessMapping:h,imageBrightness:f,imageContrast:u,imageGamma:l,samplesPerAxis:n}=i,m=this.fontAtlas.charset.length,c=new Uint32Array(o*e),T=1/l,v=(u+100)/100,p=f/200,g=n*n,d=1/g,x=1/n,E=t.width/o,A=t.height/e,S=this.getFontBrightness(n),V=t.data,$=t.width;for(let M=0;M<e;M++)for(let B=0;B<o;B++){let w=0;const j=new Float32Array(g);for(let C=0;C<n;C++)for(let P=0;P<n;P++){const L=Math.floor(B*E+(P+.5)*x*E),z=Math.floor(M*A+(C+.5)*x*A),N=Math.min(Math.max(L,0),$-1),F=(Math.min(Math.max(z,0),t.height-1)*$+N)*4,G=V[F]/255,nt=V[F+1]/255,lt=V[F+2]/255;let b=G*Bt+nt*_t+lt*yt;b=Math.pow(b,T),b=b+p,b=(b-.5)*v+.5,b=Math.pow(Math.max(0,Math.min(1,b)),h),a&&(b=1-b),b=Math.max(0,Math.min(1,b)),j[C*n+P]=b,w+=b}w*=d;const ot=Math.floor(Math.min(w,.9999)*m);if(s>=.99){c[M*o+B]=ot;continue}let Q=0,J=1/0;const it=1-s,st=w*(m-1),at=1/m;for(let C=0;C<m;C++){const P=Math.abs(C-st)*at;let L=0;const z=S[C];for(let F=0;F<g;F++){const G=j[F]-z[F];L+=G*G}const N=L*d,X=P*s+N*it;X<J&&(J=X,Q=C)}c[M*o+B]=Q}return{indices:c,cols:o,rows:e}}createMatchTexture(t,o){const{indices:e,cols:i,rows:s}=t,a=new Uint8Array(i*s);for(let h=0;h<e.length;h++)a[h]=Math.floor(e[h]/o*255);return a}}class It{type="webgl2";gl=null;canvas;passthroughProgram=null;asciiProgram=null;postProcessProgram=null;bloomThresholdProgram=null;bloomBlurProgram=null;effectPrograms=new Map;passthroughUniforms=new Map;asciiUniforms=new Map;postProcessUniforms=new Map;bloomThresholdUniforms=new Map;bloomBlurUniforms=new Map;sourceTexture=null;intermediateTexture=null;fontAtlasTexture=null;matrixRainFontAtlasTexture=null;matchResultTexture=null;bloomBrightTexture=null;bloomBlurTexture=null;intermediateFBO=null;bloomBrightFBO=null;bloomBlurFBO=null;fontAtlas=null;matrixRainFontAtlas=null;matrixRainCharset="";charsetUpdatePromise=Promise.resolve();matrixRainCharsetUpdatePromise=Promise.resolve();characterMatcher;lastMatchResult=null;extractCanvas=null;extractCtx=null;fullscreenVAO=null;sourceWidth=0;sourceHeight=0;outputWidth=0;outputHeight=0;currentCharset="";currentFontScale=1;initialized=!1;currentSource=null;matchGridCols=0;matchGridRows=0;colorCache=new Map;constructor(t){this.canvas=t.canvas,this.currentCharset=t.charset,this.characterMatcher=new Dt}async init(){try{if(this.gl=this.canvas.getContext("webgl2",{alpha:!1,antialias:!1,depth:!1,stencil:!1,preserveDrawingBuffer:!0,powerPreference:"high-performance"}),!this.gl)return console.error("Failed to get WebGL2 context"),!1;const t=this.gl;return this.fullscreenVAO=t.createVertexArray(),this.fullscreenVAO?(console.log("Compiling passthrough shader..."),this.passthroughProgram=_(t,bt,Et,"passthrough"),!this.passthroughProgram||(this.passthroughUniforms=y(t,this.passthroughProgram),console.log("Compiling ASCII shader..."),this.asciiProgram=_(t,Rt,Ct,"ascii"),!this.asciiProgram)||(this.asciiUniforms=y(t,this.asciiProgram),console.log("Compiling post-process shader..."),this.postProcessProgram=_(t,Ut,At,"postprocess"),!this.postProcessProgram)||(this.postProcessUniforms=y(t,this.postProcessProgram),console.log("Compiling bloom threshold shader..."),this.bloomThresholdProgram=_(t,Ft,St,"bloomThreshold"),!this.bloomThresholdProgram)||(this.bloomThresholdUniforms=y(t,this.bloomThresholdProgram),console.log("Compiling bloom blur shader..."),this.bloomBlurProgram=_(t,Pt,Mt,"bloomBlur"),!this.bloomBlurProgram)?!1:(this.bloomBlurUniforms=y(t,this.bloomBlurProgram),console.log("Creating font atlas..."),this.fontAtlas=await H(this.currentCharset,this.currentFontScale),this.fontAtlasTexture=D(t,this.fontAtlas.canvas),this.fontAtlasTexture?(this.characterMatcher.setFontAtlas(this.fontAtlas),this.initialized=!0,!0):(console.error("Failed to create font atlas texture"),!1))):(console.error("Failed to create VAO"),!1)}catch(t){return console.error("WebGL2 renderer initialization failed:",t),!1}}isReady(){return this.initialized&&this.gl!==null}async updateCharset(t,o=1){return this.charsetUpdatePromise=this.charsetUpdatePromise.then(()=>this.doUpdateCharset(t,o)),this.charsetUpdatePromise}async doUpdateCharset(t,o){if(!this.gl||t===this.currentCharset&&o===this.currentFontScale)return;const e=await H(t,o);this.currentCharset=t,this.currentFontScale=o,this.fontAtlas=e,this.fontAtlasTexture&&R(this.gl,this.fontAtlasTexture),this.fontAtlasTexture=D(this.gl,this.fontAtlas.canvas),this.characterMatcher.setFontAtlas(this.fontAtlas)}async updateMatrixRainCharset(t){return this.matrixRainCharsetUpdatePromise=this.matrixRainCharsetUpdatePromise.then(()=>this.doUpdateMatrixRainCharset(t)),this.matrixRainCharsetUpdatePromise}async doUpdateMatrixRainCharset(t){if(!this.gl||t===this.matrixRainCharset)return;const o=await H(t,1);this.matrixRainCharset=t,this.matrixRainFontAtlas=o,this.matrixRainFontAtlasTexture&&R(this.gl,this.matrixRainFontAtlasTexture),this.matrixRainFontAtlasTexture=D(this.gl,this.matrixRainFontAtlas.canvas)}render(t,o,e,i="ascii",s){if(!this.gl||!this.initialized)return;this.currentSource=t;const a=t instanceof HTMLVideoElement?t.videoWidth:t.width,h=t instanceof HTMLVideoElement?t.videoHeight:t.height;if(a===0||h===0)return;const f=s?.settings?.[i]??s??{};this.uploadSource(t,a,h);const{outputWidth:u,outputHeight:l,gridCols:n,gridRows:m}=i==="ascii"?this.calculateDimensions(a,h,o):this.calculateEffectDimensions(a,h,f);this.matchGridCols=n,this.matchGridRows=m,this.ensureIntermediateTextures(u,l),i==="ascii"?this.renderAscii(t,o,e,n,m):this.renderPassthrough(o,e,i,f)}calculateEffectDimensions(t,o,e){const i=Math.max(1,e?.baseScale??1),s=Math.max(1,Math.round(t*i)),a=Math.max(1,Math.round(o*i));return{outputWidth:s,outputHeight:a,gridCols:s,gridRows:a}}uploadSource(t,o,e){this.gl&&(this.sourceTexture?this.sourceWidth!==o||this.sourceHeight!==e?(R(this.gl,this.sourceTexture),this.sourceTexture=D(this.gl,t)):Tt(this.gl,this.sourceTexture,t):this.sourceTexture=D(this.gl,t),this.sourceWidth=o,this.sourceHeight=e,this.currentSource=t)}calculateDimensions(t,o,e){const i=e.character,s=i.outputWidth,a=t/o,h=Math.max(1,Math.round(s*a)),f=Math.max(1,s),u=this.fontAtlas?.charWidth??19,l=this.fontAtlas?.charHeight??32,n=i.scale,m=Math.ceil(h*u*n),c=Math.ceil(f*l*n);return{outputWidth:m,outputHeight:c,gridCols:h,gridRows:f}}ensureIntermediateTextures(t,o){if(!this.gl)return;const e=this.gl;this.intermediateTexture?(this.intermediateTexture.width!==t||this.intermediateTexture.height!==o)&&(q(e,this.intermediateTexture,t,o),this.intermediateFBO&&(this.intermediateFBO.width=t,this.intermediateFBO.height=o)):(this.intermediateTexture=W(e,t,o),this.intermediateTexture&&(this.intermediateFBO=k(e,this.intermediateTexture))),this.bloomBrightTexture?(this.bloomBrightTexture.width!==t||this.bloomBrightTexture.height!==o)&&(q(e,this.bloomBrightTexture,t,o),this.bloomBrightFBO&&(this.bloomBrightFBO.width=t,this.bloomBrightFBO.height=o)):(this.bloomBrightTexture=W(e,t,o),this.bloomBrightTexture&&(this.bloomBrightFBO=k(e,this.bloomBrightTexture))),this.bloomBlurTexture?(this.bloomBlurTexture.width!==t||this.bloomBlurTexture.height!==o)&&(q(e,this.bloomBlurTexture,t,o),this.bloomBlurFBO&&(this.bloomBlurFBO.width=t,this.bloomBlurFBO.height=o)):(this.bloomBlurTexture=W(e,t,o),this.bloomBlurTexture&&(this.bloomBlurFBO=k(e,this.bloomBlurTexture))),this.outputWidth=t,this.outputHeight=o,(this.canvas.width!==t||this.canvas.height!==o)&&(this.canvas.width=t,this.canvas.height=o)}renderAscii(t,o,e,i,s){if(!this.gl||!this.asciiProgram||!this.sourceTexture||!this.fontAtlas)return;const a=this.gl,f=o.postProcessing.bloom?.enabled??!1,u=this.extractSourcePixels(t);u&&(this.lastMatchResult=this.characterMatcher.match(u,i,s,{brightnessWeight:1-o.advanced.spatialWeight,invert:o.advanced.invert,brightnessMapping:o.advanced.brightnessMapping,imageBrightness:o.image.brightness,imageContrast:o.image.contrast,imageGamma:o.image.gamma,samplesPerAxis:o.advanced.matchQuality==="fast"?2:o.advanced.matchQuality==="balanced"?3:4}),this.lastMatchResult&&this.updateMatchResultTexture(this.lastMatchResult,i,s)),this.intermediateFBO&&this.intermediateTexture?(O(a,this.intermediateFBO),a.viewport(0,0,this.outputWidth,this.outputHeight)):Y(a,this.canvas.width,this.canvas.height),a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(this.asciiProgram),a.bindVertexArray(this.fullscreenVAO),U(a,this.sourceTexture.texture,0),U(a,this.fontAtlasTexture.texture,1),this.matchResultTexture||this.createDefaultMatchTexture(i,s),this.matchResultTexture&&U(a,this.matchResultTexture.texture,2),this.setUniform1i("sourceTexture",0),this.setUniform1i("fontAtlas",1),this.setUniform1i("matchResultTexture",2),this.setAsciiUniforms(o,i,s),a.drawArrays(a.TRIANGLES,0,3),f&&this.intermediateFBO&&this.intermediateTexture&&this.renderBloom(o,e),this.intermediateFBO&&this.intermediateTexture&&this.postProcessProgram&&this.renderPostProcess(o,e),a.bindVertexArray(null)}extractSourcePixels(t){const o=t instanceof HTMLVideoElement?t.videoWidth:t.width,e=t instanceof HTMLVideoElement?t.videoHeight:t.height;return o===0||e===0||((!this.extractCanvas||this.extractCanvas.width!==o||this.extractCanvas.height!==e)&&(this.extractCanvas=new OffscreenCanvas(o,e),this.extractCtx=this.extractCanvas.getContext("2d",{willReadFrequently:!0})),!this.extractCtx)?null:(this.extractCtx.drawImage(t,0,0),this.extractCtx.getImageData(0,0,o,e))}createDefaultMatchTexture(t,o){if(!this.gl)return;const e=this.gl,i=new Uint8Array(t*o),s=e.createTexture();s&&(e.bindTexture(e.TEXTURE_2D,s),e.texImage2D(e.TEXTURE_2D,0,e.R8,t,o,0,e.RED,e.UNSIGNED_BYTE,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),this.matchResultTexture={texture:s,width:t,height:o,internalFormat:e.R8,format:e.RED,type:e.UNSIGNED_BYTE})}updateMatchResultTexture(t,o,e){if(!this.gl||!this.fontAtlas)return;const i=this.gl,s=this.characterMatcher.createMatchTexture(t,this.fontAtlas.charset.length);if(!this.matchResultTexture||this.matchResultTexture.width!==o||this.matchResultTexture.height!==e){this.matchResultTexture&&R(i,this.matchResultTexture);const a=i.createTexture();if(!a)return;i.bindTexture(i.TEXTURE_2D,a),i.texImage2D(i.TEXTURE_2D,0,i.R8,o,e,0,i.RED,i.UNSIGNED_BYTE,s),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,i.NEAREST),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),this.matchResultTexture={texture:a,width:o,height:e,internalFormat:i.R8,format:i.RED,type:i.UNSIGNED_BYTE}}else i.bindTexture(i.TEXTURE_2D,this.matchResultTexture.texture),i.texSubImage2D(i.TEXTURE_2D,0,0,0,o,e,i.RED,i.UNSIGNED_BYTE,s)}setUniform1i(t,o){const e=this.asciiUniforms.get(t);e&&this.gl&&this.gl.uniform1i(e,o)}setAsciiUniforms(t,o,e){if(!this.gl||!this.fontAtlas)return;const i=this.gl,s=this.asciiUniforms,a=t.character,h=t.image,f=t.color,u=t.advanced,l=(d,x)=>{const E=s.get(d);E&&i.uniform1f(E,x)},n=(d,x,E)=>{const A=s.get(d);A&&i.uniform2f(A,x,E)},m=(d,x,E,A)=>{const S=s.get(d);S&&i.uniform3f(S,x,E,A)};n("sourceSize",this.sourceWidth,this.sourceHeight),n("outputSize",this.outputWidth,this.outputHeight);const c=this.fontAtlas.charWidth,T=this.fontAtlas.charHeight,v=a.scale;n("cellSize",c*v,T*v),n("atlasSize",this.fontAtlas.width,this.fontAtlas.height),n("atlasCharSize",c,T),l("atlasCols",this.fontAtlas.cols),l("charsetLength",this.fontAtlas.charset.length),l("brightness",h.brightness),l("contrast",h.contrast),l("invert",u.invert?1:0),l("saturation",h.saturation),l("hue",h.hue),l("sharpness",h.sharpness),l("gamma",h.gamma),l("imageColorMode",h.colorMode==="color"?0:h.colorMode==="grayscale"?1:h.colorMode==="monochrome"?2:3),l("brightnessMapping",u.brightnessMapping),l("edgeEnhance",u.edgeEnhance),l("blur",u.blur),l("quantizeColors",u.quantizeColors),l("useOriginalColors",f.useOriginal?1:0);const p=this.parseColor(f.custom);m("customColor",p.r,p.g,p.b);const g=this.parseColor(f.backgroundColor);m("backgroundColor",g.r,g.g,g.b),l("spacing",a.spacing),l("gridCols",o)}renderPassthrough(t,o,e="ascii",i={}){if(!this.gl||!this.sourceTexture||!this.passthroughProgram)return;const s=this.gl,a=t.postProcessing.bloom?.enabled??!1;this.intermediateFBO&&this.intermediateTexture?(O(s,this.intermediateFBO),s.viewport(0,0,this.outputWidth,this.outputHeight)):Y(s,this.canvas.width,this.canvas.height),s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(this.passthroughProgram),s.bindVertexArray(this.fullscreenVAO),U(s,this.sourceTexture.texture,0);const h=this.passthroughUniforms.get("inputTexture");h&&s.uniform1i(h,0);this.setEffectPassUniforms(e,i,o);s.drawArrays(s.TRIANGLES,0,3),a&&this.intermediateFBO&&this.intermediateTexture&&this.renderBloom(t,o),this.intermediateFBO&&this.intermediateTexture&&this.postProcessProgram&&this.renderPostProcess(t,o),s.bindVertexArray(null)}effectTypeId(t){return{waveLines:1,dithering:2,halftone:3,pixelSort:4,dots:5,contour:6,edgeDetection:7,crosshatch:8,blockify:9,threshold:10,noiseField:11,matrixRain:12,vhs:13,voronoi:14}[t]??0}effectParams(t,e={}){const r={paramA:1,paramB:1,paramC:1,paramD:0,paramE:0,paramF:0,paramG:0,paramH:0,modeA:0,modeB:0,colorA:"#ffffff",colorB:"#000000"};switch(t){case"waveLines":return{...r,paramA:e.lineCount??50,paramB:e.amplitude??20,paramC:e.frequency??1,paramD:e.lineThickness??.4,modeA:e.animate===!1?0:1,modeB:e.direction==="vertical"?1:0,colorA:e.fgColor??"#ffffff",colorB:e.bgColor??"#000000"};case"dithering":{const i={bayer2x2:0,bayer4x4:0,bayer8x8:0,bayer16x16:0,clusteredDot:1,floydSteinberg:2,atkinson:2,jarvisJudiceNinke:2,stucki:2,burkes:2,sierra:2,sierraTwoRow:2,sierraLite:2,blueNoise:3,interleavedGradient:3,crosshatch:4,random:5}[e.method]??0;return{...r,paramA:e.intensity??1,paramB:e.colorLevels??2,paramC:e.matrixSize??4,paramD:i,modeA:e.colorMode==="mono"?1:0,colorA:e.customColor??e.foregroundColor??"#ffffff",colorB:e.backgroundColor??"#000000"}};case"halftone":return{...r,paramA:e.dotScale??1,paramB:e.spacing??8,paramC:e.angle??45,paramD:e.lineThickness??.4,modeA:e.colorMode==="bw"?1:0,modeB:e.shape==="diamond"?1:0,colorA:e.fgColor??"#ffffff",colorB:e.bgColor??"#000000"};case"pixelSort":return{...r,paramA:e.streakLength??100,paramB:e.threshold??.25,paramC:e.intensity??.8,paramD:e.randomness??.3,modeA:e.reverse?1:0,modeB:e.mode==="darkness"?1:0};case"dots":return{...r,paramA:e.sizeMultiplier??1,paramB:12,paramC:e.spacing??1,paramD:e.shape==="diamond"?45:0,modeA:e.colorMode==="custom"?1:0,modeB:e.gridType==="hex"?1:0,colorA:e.fgColor??"#ffffff",colorB:e.bgColor??"#000000"};case"contour":return{...r,paramA:e.levels??8,paramB:e.lineThickness??1,modeA:e.invert?1:0,modeB:e.fillMode==="lines"?1:0,colorA:e.lineColor??"#000000",colorB:e.bgColor??"#ffffff"};case"edgeDetection":return{...r,paramA:e.threshold??.3,paramB:e.lineWidth??1,modeA:e.invert?1:0,modeB:e.algorithm==="laplacian"?1:0,colorA:e.edgeColor??"#ffffff",colorB:e.bgColor??"#000000"};case"crosshatch":return{...r,paramA:e.density??6,paramB:e.layers??2,paramC:e.angle??45,paramD:(e.lineWidth??1)/12,paramE:e.randomness??0,modeA:e.invert?1:0,colorA:e.fgColor??"#ffffff",colorB:e.bgColor??"#000000"};case"blockify":return{...r,paramA:e.blockSize??8,paramB:e.borderWidth??0,modeA:e.colorMode==="grayscale"?1:0,colorA:e.borderColor??"#000000"};case"threshold":return{...r,paramA:e.levels??2,paramB:e.thresholdPoint??.5,modeA:e.invert?1:0,modeB:e.dither?1:0,colorA:e.fgColor??"#ffffff",colorB:e.bgColor??"#000000"};case"noiseField":return{...r,paramA:e.scale??40,paramB:e.intensity??1,paramC:e.octaves??3,paramD:e.animate===!1?0:e.speed??1,modeA:e.distortOnly?1:0};case"matrixRain":return{...r,paramA:e.cellSize??15,paramB:e.spacing??0,paramC:e.speed??1,paramD:e.trailLength??15,paramE:e.bgOpacity??.3,paramF:e.glowIntensity??1,paramH:e.threshold??0,modeB:e.direction==="up"?1:e.direction==="left"||e.direction==="right"?2:0,colorA:e.rainColor??"#00ff00"};case"vhs":return{...r,paramA:e.distortion??.5,paramB:e.noise??.3,paramC:e.colorBleed??.5,paramD:e.scanlines??.3,paramE:e.trackingError??.2};case"voronoi":return{...r,paramA:e.cellSize??30,paramB:e.edgeWidth??.3,paramD:e.randomize??.8,modeA:e.colorMode??0,modeB:e.edgeColor??0};default:return r}}effectIntensity(t,e){return 1}setEffectPassUniforms(t,e,i){if(!this.gl)return;const s=this.gl,a=(h,f)=>{const u=this.passthroughUniforms.get(h);u&&s.uniform1f(u,f)},n=(h,f,u)=>{const l=this.passthroughUniforms.get(h);l&&s.uniform2f(l,f,u)},m=(h,f,u,l)=>{const c=this.passthroughUniforms.get(h);if(c){const T=this.parseColor(f);s.uniform3f(c,T.r,T.g,T.b)}};const p=this.effectParams(t,e||{});a("effectType",this.effectTypeId(t)),a("brightness",e?.brightness??0),a("contrast",e?.contrast??0),a("intensity",this.effectIntensity(t,e||{})),a("time",i),n("resolution",this.outputWidth,this.outputHeight),a("paramA",p.paramA),a("paramB",p.paramB),a("paramC",p.paramC),a("paramD",p.paramD),a("paramE",p.paramE),a("paramF",p.paramF),a("paramG",p.paramG),a("paramH",p.paramH),a("modeA",p.modeA),a("modeB",p.modeB),m("colorA",p.colorA),m("colorB",p.colorB)}renderBloom(t,o){if(!this.gl||!this.bloomThresholdProgram||!this.bloomBlurProgram||!this.intermediateTexture||!this.bloomBrightFBO||!this.bloomBrightTexture||!this.bloomBlurFBO||!this.bloomBlurTexture)return;const e=this.gl,i=t.postProcessing.bloom;if(!i)return;O(e,this.bloomBrightFBO),e.useProgram(this.bloomThresholdProgram),U(e,this.intermediateTexture.texture,0);const s=this.bloomThresholdUniforms.get("inputTexture");s&&e.uniform1i(s,0);const a=this.bloomThresholdUniforms.get("threshold"),h=this.bloomThresholdUniforms.get("softThreshold");a&&e.uniform1f(a,i.threshold),h&&e.uniform1f(h,i.softThreshold),e.drawArrays(e.TRIANGLES,0,3),O(e,this.bloomBlurFBO),e.useProgram(this.bloomBlurProgram),U(e,this.bloomBrightTexture.texture,0);const f=this.bloomBlurUniforms.get("inputTexture");f&&e.uniform1i(f,0);const u=this.bloomBlurUniforms.get("direction"),l=this.bloomBlurUniforms.get("resolution"),n=this.bloomBlurUniforms.get("radius");u&&e.uniform2f(u,1,0),l&&e.uniform2f(l,this.outputWidth,this.outputHeight),n&&e.uniform1f(n,i.radius),e.drawArrays(e.TRIANGLES,0,3),O(e,this.bloomBrightFBO),U(e,this.bloomBlurTexture.texture,0),u&&e.uniform2f(u,0,1),e.drawArrays(e.TRIANGLES,0,3)}renderPostProcess(t,o){if(!this.gl||!this.postProcessProgram||!this.intermediateTexture)return;const e=this.gl,i=t.postProcessing;Y(e,this.canvas.width,this.canvas.height),e.useProgram(this.postProcessProgram),U(e,this.intermediateTexture.texture,0);const s=this.postProcessUniforms.get("inputTexture");if(s&&e.uniform1i(s,0),this.bloomBrightTexture){U(e,this.bloomBrightTexture.texture,1);const a=this.postProcessUniforms.get("bloomTexture");a&&e.uniform1i(a,1)}this.setPostProcessUniforms(i,o),e.drawArrays(e.TRIANGLES,0,3)}setPostProcessUniforms(t,o){if(!this.gl)return;const e=this.gl,i=this.postProcessUniforms,s=(p,g)=>{const d=i.get(p);d&&e.uniform1f(d,g)},a=(p,g)=>{const d=i.get(p);d&&e.uniform1ui(d,g)};((p,g,d)=>{const x=i.get(p);x&&e.uniform2f(x,g,d)})("resolution",this.outputWidth,this.outputHeight),s("time",o);const f=t.bloom;a("bloomEnabled",f?.enabled?1:0),s("bloomIntensity",f?.intensity??1);const u=t.grain;a("grainEnabled",u?.enabled?1:0),s("grainIntensity",u?.intensity??0),s("grainSize",u?.size??1),s("grainSpeed",u?.speed??1);const l=t.chromatic;a("chromaticEnabled",l?.enabled?1:0),s("chromaticOffset",l?.offset??0);const n=t.scanlines;a("scanlinesEnabled",n?.enabled?1:0),s("scanlinesOpacity",n?.opacity??0),s("scanlinesSpacing",n?.spacing??2);const m=t.vignette;a("vignetteEnabled",m?.enabled?1:0),s("vignetteIntensity",m?.intensity??0),s("vignetteRadius",m?.radius??.5);const c=t.crtCurve;a("crtEnabled",c?.enabled?1:0),s("crtAmount",c?.amount??0);const T=t.phosphor;a("phosphorEnabled",T?.enabled?1:0);const v=this.parseColor(T?.customColor??"#00ff00");s("phosphorColorR",v.r),s("phosphorColorG",v.g),s("phosphorColorB",v.b)}parseColor(t){const o=this.colorCache.get(t);if(o)return o;const[e,i,s]=ut(t),a={r:e/255,g:i/255,b:s/255};return this.colorCache.set(t,a),a}async getCharacterIndices(){return this.lastMatchResult?{cols:this.lastMatchResult.cols,rows:this.lastMatchResult.rows,indices:this.lastMatchResult.indices}:null}getCharset(){return this.currentCharset}getGridDimensions(){return{cols:this.matchGridCols,rows:this.matchGridRows}}getSourceDimensions(){return{width:this.sourceWidth,height:this.sourceHeight}}getCurrentSource(){return this.currentSource}destroy(){if(!this.gl)return;const t=this.gl;this.sourceTexture&&R(t,this.sourceTexture),this.intermediateTexture&&R(t,this.intermediateTexture),this.fontAtlasTexture&&R(t,this.fontAtlasTexture),this.matrixRainFontAtlasTexture&&R(t,this.matrixRainFontAtlasTexture),this.matchResultTexture&&R(t,this.matchResultTexture),this.bloomBrightTexture&&R(t,this.bloomBrightTexture),this.bloomBlurTexture&&R(t,this.bloomBlurTexture),this.intermediateFBO&&K(t,this.intermediateFBO),this.bloomBrightFBO&&K(t,this.bloomBrightFBO),this.bloomBlurFBO&&K(t,this.bloomBlurFBO),this.passthroughProgram&&t.deleteProgram(this.passthroughProgram),this.asciiProgram&&t.deleteProgram(this.asciiProgram),this.postProcessProgram&&t.deleteProgram(this.postProcessProgram),this.bloomThresholdProgram&&t.deleteProgram(this.bloomThresholdProgram),this.bloomBlurProgram&&t.deleteProgram(this.bloomBlurProgram),this.effectPrograms.forEach(o=>t.deleteProgram(o)),this.fullscreenVAO&&t.deleteVertexArray(this.fullscreenVAO),this.initialized=!1,this.gl=null}}export{Ct as ASCII_FRAGMENT,Rt as ASCII_VERTEX,Mt as BLOOM_BLUR_FRAGMENT,Pt as BLOOM_BLUR_VERTEX,St as BLOOM_THRESHOLD_FRAGMENT,Ft as BLOOM_THRESHOLD_VERTEX,Dt as CharacterMatcher,I as FULLSCREEN_VERTEX_SHADER,Et as PASSTHROUGH_FRAGMENT,bt as PASSTHROUGH_VERTEX,At as POSTPROCESS_FRAGMENT,Ut as POSTPROCESS_VERTEX,rt as SHADER_UTILS,It as WebGL2Renderer,Y as bindDefaultFramebuffer,O as bindFramebuffer,U as bindTexture,tt as compileShader,H as createFontAtlasWebGL2,k as createFramebuffer,_ as createProgram,W as createTexture,D as createTextureFromSource,K as deleteFramebuffer,R as deleteTexture,y as getUniformLocations,xt as linkProgram,q as resizeTexture,Tt as updateTexture};
