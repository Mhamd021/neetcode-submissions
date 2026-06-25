class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number 
    {
        //[6,1,2,3,4,5] target = 6
        
        let l =0 ;
        let r = nums.length -1;
        let result = -1;
        while(l<=r)
        {
            const mid = Math.floor((l+r)/2);
            
            if(nums[mid] === target ) result = mid;

            if (nums[l] <= nums[mid]) {
                if (target > nums[mid] || target < nums[l]) {
                    l = mid + 1;
                } else {
                    r = mid - 1;
                }
            } else {
                if (target < nums[mid] || target > nums[r]) {
                    r = mid - 1;
                } else {
                    l = mid + 1;
                }
            }
            

        }
        return result;
    }
}
