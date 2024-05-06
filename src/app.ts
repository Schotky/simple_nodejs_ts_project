function trap(height: number[]): number {
  let left = 0,
    right = height.length - 1;
  let maxLeft = 0,
    maxRight = 0;
  let trappedWater = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        trappedWater += maxLeft - height[left];
      }
      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        trappedWater += maxRight - height[right];
      }
      right--;
    }
  }

  return trappedWater;
}

console.log(trap([4, 2, 0, 3, 2, 5]));
