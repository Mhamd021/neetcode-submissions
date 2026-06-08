class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] 
    {
        const map = new Map<number,number>();

        for(let i =0 ; i<nums.length;i++)
        {
            const complete = target - nums[i];

            if(map.has(complete)) return[map.get(complete),i];

            map.set(nums[i],i);
        }
    }
}
