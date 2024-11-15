export function debounce(func: Function, delay = 1000) {
  let timeoutId: NodeJS.Timeout;

  return function () {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func();
    }, delay);
  };
}
