const intlNum = Intl.NumberFormat('en-NZ');

function formatNumber(number) {
  return intlNum.format(number);
}

export { formatNumber };
