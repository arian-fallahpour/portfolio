export function join(...classNames) {
  return classNames
    .filter((v) => !v || v !== "")
    .join(" ")
    .trim();
}

export function toCap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatNumber(number) {
  return number.slice(0, 3) + "-" + number.slice(3, 6) + "-" + number.slice(6);
}
