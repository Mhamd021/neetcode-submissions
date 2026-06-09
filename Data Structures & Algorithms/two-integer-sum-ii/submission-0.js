class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) 
    {
        let left = 0 ;
        let right = numbers.length -1;

        while(left < right)
        {
            const check = numbers[right] + numbers[left];
            if(target === check) return [left+1,right+1];
            else if(target > check) left++;
            else right--;
        }
    }
}
