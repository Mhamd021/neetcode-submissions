class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] 
    {
      const map = new Map<number,number>();

      for(let i=0;i<nums.length;i++)
      {
        const numb = nums[i];
        const complete = target - numb;

        if(map.has(complete))
        {
            return [i,map.get(complete)];
        }
        map.set(numb,i);
      }
      
      
    }
}
