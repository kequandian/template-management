const data = {};

export const inject = (key, obj) => {
  data[key] = obj;
};

export const getInject = (key) => {
  return data[key] || {};
};
