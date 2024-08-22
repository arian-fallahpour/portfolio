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

export const debounce = (callback, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export function runAnimations(animateFunction, animations) {
  animations.forEach((animation) => {
    animateFunction("." + animation.class, animation.style, animation.options);
  });
}
