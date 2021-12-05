function getMinMax(str) {
  let ars = str.split(' ');
  for (let i = ars.length - 1; i >= 0; i--) {
    if (ars[i].match(/[^0-9]+$/) != null) {
      ars.splice([i], 1);
    }
  }
  return str = {
    'min': min = Math.min.apply(Math, ars),
    'max': max = Math.max.apply(Math, ars),
  }
}
