class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) 
    {
         const numsSet = new Set(nums);

  let longest = 0;
  for (const num of numsSet) {
    if (!numsSet.has(num - 1)) {
      let seq = 1;
      while (numsSet.has(num + seq)) {
        seq++;
      }
      longest = Math.max(longest, seq);
    }
  }
  return longest;
   
    }
}
