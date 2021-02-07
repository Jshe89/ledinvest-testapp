export const numberWithCommas = x => {
  if (!x) {
    return x;
  }
  let emptyComasValue = x.toString().replace(/[,\s]/g, '');
  return emptyComasValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
