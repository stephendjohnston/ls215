function totalArea(rectangles) {
  return rectangles.reduce((accumulator, rectangle) => {
    return accumulator + rectangle.reduce(getProduct);
  }, 0);
}

let getProduct = (accumulator, currentValue) => accumulator * currentValue;

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

// LS Solution:

function totalArea(rectangles) {
  let areas = rectangles.map(rectangle => rectangle[0] * rectangle[1]);
  return areas.reduce((sum, area) => sum + area);
}