// Optical sizing for client logos: wide wordmarks get shorter, square marks taller, so every
// logo carries roughly the same visual weight. `width`/`height` are the file's intrinsic size;
// `scale` nudges a logo whose file has extra padding or very thin strokes.
export function logoSize({ width, height, scale = 1 }, base = 44) {
  const ratio = width / height;
  const h = Math.round(base * Math.pow(ratio, -0.4) * scale);
  return { width: Math.round(h * ratio), height: h };
}
