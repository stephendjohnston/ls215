function totalSquareArea(rectangles) {
  let squares = rectangles.filter(rectangle => rectangle[0] === rectangle[1]);
  let areas = squares.map(square => square[0] * square[1]);
  return areas.reduce((sum, area) => sum + area);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles));    // 121