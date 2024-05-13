const someFunction = (nums: number[]): number[] => {
  let result: number[] = [...nums, 1, 3];

  return result;
};

console.log(someFunction([0, 1, 2, 4, 5, 7]));
