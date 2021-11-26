function factorial(n) {
  let total = 1;
  if (n > 1) {
    for (i = 0; i < n; i++) {
      total = total * (n - i);
    }
  }
  n = total;
  return n;
}