import { DateEntry } from "../types";

export function generateShades(baseColor: string, numShades: number) {
  const shades = [];
  for (let i = 0; i < numShades; i++) {
    const brightness = (i + 1) / (numShades + 1);
    shades.push(shadeColor(baseColor, brightness));
  }
  return shades;
}

function shadeColor(color: string, brightness: number) {
  var r = parseInt(color.slice(1, 3), 16);
  var g = parseInt(color.slice(3, 5), 16);
  var b = parseInt(color.slice(5, 7), 16);

  r = Math.round(r * brightness);
  g = Math.round(g * brightness);
  b = Math.round(b * brightness);

  const toHex = (value: number) => {
    const hex = value.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function getMinQuantity(entries: DateEntry[]) {
  let min = entries[0];
  entries.forEach((entry) => {
    if (entry.quantity < min.quantity && entry.quantity > 0) {
      min = entry;
    }
  });
  return min.quantity;
}
function getMaxQuantity(entries: DateEntry[]) {
  let max = entries[0];
  entries.forEach((entry) => {
    if (entry.quantity > max.quantity && entry.quantity > 0) {
      max = entry;
    }
  });
  return max.quantity;
}
export function getShadeRange(entries: DateEntry[]) {
  const minQuantity = getMinQuantity(entries);
  const maxQuantity = getMaxQuantity(entries);
  const range = maxQuantity - minQuantity + 1;
  return range;
}
export function isValidHexColorCode(col: string) {
  const hexColorRegex = /^#([0-9A-Fa-f]{6})$/;
  return hexColorRegex.test(col);
}
