export function printInvalidHexCodeWarningMessage(hexcode: string) {
  console.warn(
    `Warning: ${hexcode} is not a valid hexadecimal color code. Please ensure you use a valid 6-digit hexadecimal color code.`
  );
}
