class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] 
    {
        nums = nums.sort((a,b)=> a - b);
        let result: number[][] = [];
     for(let i=0;i<nums.length;i++)
     {
        
        if(i>0 && nums[i] === nums[i-1] ) continue;
        let left = i+1;
        let right =nums.length -1;
        while(left < right)
        {
            const check = nums[i]+nums[left] + nums[right];
            if(check === 0 ) {
            result.push([ nums[i],nums[left],nums[right] ]);
            left++;
            right--;
            while(left<right && nums[left] === nums[left - 1 ]) left++;
            while(left<right && nums[right] === nums[right + 1 ]) right--;
            }
            else if(check < 0) left++;
            else right --;
        }
     } 
     return result;
    }
}
