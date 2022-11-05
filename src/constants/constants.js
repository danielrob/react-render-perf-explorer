const RANDOM_VALUE_MAP = {
  true: Array.from(Array(10001)).map(() => Math.random()),
  false: Array.from(Array(10001)).map(() => Math.random()),
};

export { RANDOM_VALUE_MAP };
