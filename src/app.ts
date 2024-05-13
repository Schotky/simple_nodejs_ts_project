const someFunction = (nums: number[]): number[] => {
  let result: number[] = [...nums];

  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
  }

  return result;
};

console.log(someFunction([0, 1, 2, 4, 5, 7]));
