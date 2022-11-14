function componentToHex(a) {
  var hex = a.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function hex(red, green, blue) {
  return "#" + componentToHex(red) + componentToHex(green) + 
    componentToHex(blue);
}

export default hex;
