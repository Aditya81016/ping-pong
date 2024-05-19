export default function distance(pos1, pos2) {
  const base = Math.abs(pos1.x - pos2.x);
  const height = Math.abs(pos1.y - pos2.y);
  const distance = Math.sqrt(height ** 2 + base ** 2);
  return distance;
}
