function traverseLands(grid: string[][], lands: Set<string>, i: number, j: number, maxI: number, maxJ: number): void {
  lands.add(i.toString() + j.toString());
  if (j + 1 <= maxJ && grid[i][j + 1] === "1" && !lands.has(i.toString() + "," + (j + 1).toString())) {
    traverseLands(grid, lands, i, j + 1, maxI, maxJ);
  }
  if (i - 1 >= 0 && grid[i - 1][j] === "1" && !lands.has((i - 1).toString() + "," + j.toString())) {
    traverseLands(grid, lands, i - 1, j, maxI, maxJ);
  }
  if (j - 1 >= 0 && grid[i][j - 1] === "1" && !lands.has(i.toString() + "," + (j - 1).toString())) {
    traverseLands(grid, lands, i, j - 1, maxI, maxJ);
  }

  if (i - 1 >= 0 && grid[i - 1][j] === "1" && !lands.has((i - 1).toString() + "," + j.toString())) {
    traverseLands(grid, lands, i - 1, j, maxI, maxJ);
  }
  if (i + 1 <= maxI && grid[i + 1][j] === "1" && !lands.has((i + 1).toString() + "," + j.toString())) {
    traverseLands(grid, lands, i + 1, j, maxI, maxJ);
  }
  if (j + 1 <= maxJ && grid[i][j + 1] === "1" && !lands.has(i.toString() + "," + (j + 1).toString())) {
    traverseLands(grid, lands, i, j + 1, maxI, maxJ);
  }
}

function numIslands(grid: string[][]): number {
  const coveredLands = new Set<string>();
  let result = 0;


  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !coveredLands.has(i.toString() + "," + j.toString())) {
        traverseLands(grid, coveredLands, i, j, grid.length - 1, grid[0].length - 1);
        result++;
      }
    }
  }

  return result;
}

const input = [
  ["1", "0", "0", "1", "1", "1", "0", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["1", "0", "0", "1", "1", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "0", "0", "1", "0"],
  ["0", "0", "0", "1", "1", "1", "1", "0", "1", "0", "1", "1", "0", "0", "0", "0", "1", "0", "1", "0"],
  ["0", "0", "0", "1", "1", "0", "0", "1", "0", "0", "0", "1", "1", "1", "0", "0", "1", "0", "0", "1"],
  ["0", "0", "0", "0", "0", "0", "0", "1", "1", "1", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
  ["1", "0", "0", "0", "0", "1", "0", "1", "0", "1", "1", "0", "0", "0", "0", "0", "0", "1", "0", "1"],
  ["0", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1", "0", "1"],
  ["1", "0", "0", "1", "0", "1", "0", "0", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "1", "1"],
  ["1", "0", "1", "0", "0", "0", "0", "0", "0", "1", "0", "0", "0", "1", "0", "1", "0", "0", "0", "0"],
  ["0", "1", "1", "0", "0", "0", "1", "1", "1", "0", "1", "0", "1", "0", "1", "1", "1", "1", "0", "0"],
  ["0", "1", "0", "0", "0", "0", "1", "1", "0", "0", "1", "0", "1", "0", "0", "1", "0", "0", "1", "1"],
  ["0", "0", "0", "0", "0", "0", "1", "1", "1", "1", "0", "1", "0", "0", "0", "1", "1", "0", "0", "0"],
];

console.log(numIslands(input));
