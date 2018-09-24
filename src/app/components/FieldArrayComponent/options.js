export default value =>
  Array.apply(null, new Array(value)).map((elem, index) => ({
    label: `option-${index}`,
    value: index
  }));
